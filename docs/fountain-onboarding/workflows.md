# Fountain Core Workflows

## A. Create A Show End-To-End

1. Create Show in `Shows`.
2. Fill Title Block (`H3`, `H1`, `H3_2`).
3. Complete date, description, and button URL.
4. Set venue map and organization.
5. Upload image, save, re-open, then add caption/credit.
6. Set right-rail controls and tags.
7. Preview on correct template URL.
8. Keep invisible until approved.

## B. Shows vs. Events

- Shows contain full descriptive content.
- Events are generated instances for performance dates.
- If you remove a performance date:
1. Remove it in the Show.
2. Find and delete the associated Event.

## C. Search Older/Running Shows

When a show started in the past but is still active:

1. Open show filters.
2. Enable `Show past shows`.
3. Re-run search.

## D. Link To A Filtered Calendar (Mini-Series)

Use this path format:

- `/series/lincoln-center-presents/v/calendar/s/Talk`

Adjust the final filter term to your intended category.

## E. Atrium Template Redirect

For Atrium events, set `Button URL` to:

- `/venue/atrium/<show-slug>`

This forces the proper template behavior.

## F. Edit Home Page Collection

Home page location:

- `Collections > Lincoln Center at Home 2.0`

Guidelines:

- Keep date formatting consistent (`:00`, clean en dashes).
- Use alternate mobile image when needed (upload image, save, reopen asset manager).
- Marketing modules: a third module can be added at bottom via `display after highlights`.

## G. Upload PDF Assets

1. Go to `Assets > Create new asset`.
2. Choose `Upload PDF`.
3. Save and copy URL from `File Location`.
4. Test URL before publishing.

Important:

- Avoid clicking save repeatedly after upload; repeated saves can generate a new URL and break old links.
