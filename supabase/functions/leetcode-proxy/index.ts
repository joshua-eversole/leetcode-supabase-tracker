// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

// 1. Setup CORS headers so your React app can talk to this function
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // 2. Handle CORS preflight requests (Browser checks permissions before sending data)
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // 3. Get the slug from the request body sent by React
    const { slug } = await req.json()

    if (!slug) {
      throw new Error('No slug provided')
    }

    console.log(`Fetching data for: ${slug}`)

    // 4. Define the LeetCode GraphQL Query
    // Fields i'm asking for: title, difficulty, tags
    const query = `
      query questionData($titleSlug: String!) {
        question(titleSlug: $titleSlug) {
          questionId
          title
          titleSlug
          difficulty
          categoryTitle
          topicTags {
            name
          }
        }
      }
    `

    // 5. Send the request to LeetCode
    const leetCodeResponse = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
        'Referer': `https://leetcode.com/problems/${slug}/`
      },
      body: JSON.stringify({
        query: query,
        variables: { titleSlug: slug }
      })
    })

    const data = await leetCodeResponse.json()

    // 6. Return the LeetCode data back to your React App
    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})