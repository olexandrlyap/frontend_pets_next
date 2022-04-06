import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest, ev: NextFetchEvent) {

    const { accessToken, refreshToken } = req.cookies


    if(!accessToken && !refreshToken) {
        console.log('you are not auth')
        return NextResponse.next()
    }

    console.log('I have cookies')
    return NextResponse.next()

 
}