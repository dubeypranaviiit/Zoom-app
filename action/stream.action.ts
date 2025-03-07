"use server"

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";
const apiSecret = process.env.STREAM_SECRET_KEY;
const apiKey =process.env.NEXT_PUBLIC_STREAM_API_KEY?.trim();;
  
export const tokenProvider =async()=>{
    
    const user = await currentUser();
    if(!user)  throw new Error('User is not logged in');
    if(!apiKey)  throw new Error('No Api key');
    if(!apiSecret)  throw new Error('No Api Secret');

const  client =new StreamClient(apiKey,apiSecret)
//  const exp = Math.round(new Date().getTime() /1000  ) + 60*60; system automatically handle this
//  const token = client.generateUserToken({ user_id: user.id,  validity_in_seconds: 3600 }); //jmastery
const iat = Math.floor(Date.now() / 1000) - 10; // Subtract 10 seconds to avoid future timestamp issues
const token = client.generateUserToken({ user_id: user.id, iat, validity_in_seconds: 3600 });
 console.log(`TOken ${token}`);
 return token;
}