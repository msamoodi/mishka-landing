# Interest form → email

The Google Play, App Store and "Join as a learner" buttons on the homepage open a form. Each submission goes to `/api/interest`, which checks it and emails it to info@mishkaapp.com through [Resend](https://resend.com).

Each email shows the source (which button opened the form), first name, email, interests and career stage. Hitting **Reply** answers the person who signed up.

## One-time setup

1. Create a free Resend account.
2. Under **Domains**, add `mishkaapp.com` and add the DNS records it shows at your domain registrar. Wait until the domain shows as verified.
3. Under **API Keys**, create a key with *Sending access*.
4. Add these environment variables wherever the site runs (your hosting dashboard for production, and `.env.local` for local development):

   ```
   RESEND_API_KEY=re_…
   INTEREST_EMAIL_FROM=Mishka website <forms@mishkaapp.com>
   ```

   The from address can be any address on the verified domain. It doesn't need to be a real inbox.

5. Redeploy the site, or restart `npm run dev`, so the new variables are picked up.

Emails go to info@mishkaapp.com. To send them somewhere else, also set `INTEREST_EMAIL_TO`.

## Notes

- Until `RESEND_API_KEY` and `INTEREST_EMAIL_FROM` are set, the form shows visitors an error and nothing is sent.
- The API key stays on the server. Visitors' browsers only talk to `/api/interest`.
- Resend's free plan covers 3,000 emails a month and 100 a day.
