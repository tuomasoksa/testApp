import { serve } from "https://deno.land/std@0.120.0/http/server.ts";

const handleRequest = (request) => {
  console.log(`Request to ${request.url}`);
  return new Response("Hello world,test!");
};

console.log("Launching server on port 7777");
serve(handleRequest, { port: 7777 });
