# Fountain Quickstart (New User)

Use this checklist to create and prep your first Show safely.

## 1. Duplicate a Show

1. Find a similar show by venue and/or series.
2. Edit that show and click `Duplicate Event`.
3. Enter the date and time of the first performance.
4. Enter the title in the `H1` field using the Source field, so no extra HTML is pasted in.
5. Make sure `Display in Section > Events` and `Hide from On Demand > Yes` are selected.
6. If the H1 title is very long or contains special characters/formatting, enter a clean short slug in `Overwrite Slug`.
7. Click `Duplicate`.
8. The page may show an error, but if you go to `Fountain > Shows` and sort by `Date Created > Descending`, your show should be there.

## 2. Configure Core Fields

1. `Button URL`:
- Use a relative URL for internal redirects.
2. `Venue Map`:
- Paste Google Maps embed code.
- If needed, use map snippets from [snippets-reference.md](./snippets-reference.md).
3. `Organization`:
- For imported content, prefer `Lincoln Center` unless instructed otherwise.

## 3. Add Image Correctly

1. Upload image in `Image Select`.
2. Save the Show.
3. Re-open the Show.
4. Add image caption and photo credit.

## 4. Set Right-Rail Controls

1. `Display in Section`: set to `Events` for live events.
2. `Is Featured`: keep `No` unless specifically required.
3. `Hide from On Demand`: set `Hide` for live events.
4. `Enable Add to Calendar`: generally `Enable`.
5. `Visibility`: keep `Invisible` until approval.
6. Add tags (`Free`, `Family`, venue, series, genre as applicable).

## 5. Preview Before Launch

1. Save content.
2. Re-open and click Preview.
3. If template is wrong, adjust URL pattern:
- Atrium events: `http://preview.lincolncenter.org/venue/atrium/<your-page-slug>`
- Summer in the City: `http://preview.lincolncenter.org/series/summer-for-the-city/<your-page-slug>`

## 6. Ticketing Setup

- Single date: remove Ticket URL from Basics and put it on Ticketing tab button(s).
- Multiple dates: add first URL in Basics, then date-specific URLs on Dates tab.

## 7. Final Pre-Publish Check

- Content copy reviewed
- Image/crop appropriate
- Links tested
- Visibility still `Invisible`
- Stakeholder approval received
- Then switch visibility for launch
