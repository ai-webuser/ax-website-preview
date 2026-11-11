# Axclusive website preview

Static homepage and corrected IP transit page, prepared 11 November 2026.

## Deploy from GitHub to Vercel
1. Upload this folder's contents to the intended GitHub repository (not the enclosing ZIP).
2. In Vercel, add a new project and import that repository.
3. Choose framework preset **Other**. Root directory: repository root. No build command. Output directory: **.** (repository root). These settings are included in vercel.json.
4. Deploy and review /sg/ and /sg/ip-transit-singapore/.
5. Decide who should have access using Vercel's deployment protection settings. A private GitHub repository does not by itself make its deployed website private.

## Behaviour
- The two draft pages link to one another on the preview host.
- Other service and resource links go to the existing axclusive.com website.
- Homepage enquiries link to the existing contact page. The IP transit form prepares a WhatsApp message for the visitor to review and send.
- There is no CRM, form-storage or email backend in this project.
- Search indexing is disabled in HTML, response headers and robots.txt. This is not an access control.
- No ChatGPT sign-in integration or Sites credentials are included.
- Do not attach the main axclusive.com domain to this two-page preview. It is not a migration of the complete existing website.
- Before a production release, integrate with the complete site, verify forms/analytics and remove staging indexing restrictions while retaining correct canonical URLs.

Sources: https://vercel.com/docs/git/vercel-for-github and https://vercel.com/docs/builds/configure-a-build
