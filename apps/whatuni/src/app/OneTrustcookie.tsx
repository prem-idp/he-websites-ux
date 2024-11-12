'use server'

import { cookies } from 'next/headers';
import OneTrustCookieScript from './OneTrustCookieScript';
import { getOnetrustCookieValue } from '@/lib/getOnetrustCookieValue';
import type {  GetServerSideProps } from 'next'

export async function createCookie(cookieName: string, cookieValue: string) {
    'use server'
    const cookieStore = await cookies();
    cookieStore.set(cookieName, cookieValue);
}

export default async function OneTrustCookie(){

    const cookieStore = await cookies();
   
    const OptanonConsent = cookieStore.get('OptanonConsent')?.value;
    const OptanonConsentValue = getOnetrustCookieValue(OptanonConsent);
    const OptanonAlertBoxClosed = cookieStore.get('OptanonAlertBoxClosed');
    const cookieValuefromOnetrust = OptanonConsentValue != null && OptanonAlertBoxClosed != null  ? OptanonConsentValue : "0111";
    //createCookie("cookieconsent", cookieValuefromOnetrust);

    return <OneTrustCookieScript cookieValuefromOnetrust={cookieValuefromOnetrust} />
}