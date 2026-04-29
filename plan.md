I need to clone this site with all sections from the original, using a DIFFERENT color theme (emerald green + amber/gold instead of purple/blue), and deploy it as a static site for Cloudflare.

Key observations from the original site:
- Header with logo, language switcher, login, get access buttons
- Hero: "Get Unlimited Leads Using Social Media" with badge, video/person image, requirements list, stats, CTA
- "Over $1 Million Generated" trust badge
- "What You'll Learn" section with 6 feature cards in 2 columns
- "Here's The Bottom Line" green highlighted section with story text
- "See The Results For Yourself" with 3 social media screenshots
- "This Could Be YOU" CTA card
- "Sound Familiar?" pain point section with 3 cards
- "The Solution: Social Media Marketing" dark section
- "Why Most Network Marketers Fail" section with 3 fail cards
- "The Good News: You Can Learn This" section with CTA
- "Real People. Real Results." testimonials with 3 people
- "Ready to Get Your Results?" CTA section
- Signup form section with form fields, benefits list
- "What you'll discover" checklist
- "FREE Access - Limited Time Only!" footer banner
- Footer with copyright

Uploaded files already have:
- Next.js 15 + Tailwind setup
- Static export config
- Partial page.tsx with basic structure
- globals.css with some styling
- ClientBody.tsx for hydration fix
- aaron-gif.gif for hero image

New color theme ( Emerald Green + Amber/Gold ):
- Primary gradient: emerald-600 → teal-700 → green-800
- Accent color: amber-400 (for highlights, badges, CTAs)
- CTA buttons: amber-500 → amber-400 (gold buttons)
- Text highlights: emerald-300
- Cards: dark green glass effect
- Background: dark slate/zinc
- Success/checks: emerald-400

Plan:
1. Write complete plan.md
2. Generate needed image assets (hero person, social proof screenshots, testimonial avatars)
3. Build complete Next.js page with ALL sections from original
4. Update globals.css with new emerald/amber theme
5. Update layout.tsx metadata
6. Build static export
7. Deploy to Cloudflare

Asset generation needed:
- 3 social media proof screenshots (can use extracted assets)
- 3 testimonial avatar images (can use extracted assets or generate)
- Hero section uses the aaron-gif.gif already uploaded

For Cloudflare deployment:
- The next.config.js already has `output: 'export'` and `trailingSlash: true`
- Need to ensure all images are local or use unoptimized
- Deploy the `out/` folder as static site
