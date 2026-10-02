# Screenshot capture brief

This brief defines the screenshots to add to the current-development guides.
Claude owns the planned image capture. The guides contain marked source slots for those images.
The slots are HTML comments and do not display as empty figures.

The [capture plan](/reference/screenshot-plan.json) lists 37 images, their guide, route, required state, filename, alternative text, and caption.
Start with the Essential images, then complete the Extended images.
The plan currently records proposed captures. It does not claim that screenshots already exist.

## Prepare the application

1. Use a disposable local installation of the documented source revision.
2. Create fictional records through normal workflows or an approved demo setup.
3. Prepare administrator, teacher, reviewer, and family accounts with the required access.
4. Enable the feature needed for each screenshot.
5. Select the intended campus, cycle, and period.
6. Prepare the record state specified by the capture plan.

Use the same fictional campus and learner names across related images.
Use valid, coherent dates for calendars, marks, invoices, and requests.
Use synthetic descriptions for health and safeguarding examples.
Do not capture live personal data, real financial records, tokens, passwords, mail credentials, or recovery codes.

## Capture a real screen

Use a real browser render of the application.
Prefer a committed project capture script when one exists.
Otherwise use the available browser tools. Do not add a package dependency without approval.
A route name identifies the entry point. Resolve its record parameters from the prepared fictional data.
For list pages, open the relevant record when the required state calls for a form or detail view.

1. Set the interface language to English and the documented terminology profile.
2. Set the light theme before opening the target screen.
3. Use a desktop viewport of 1440 × 1000 and a device scale factor of 2.
4. Wait for assets and Livewire requests to finish.
5. Confirm the required record state and computed theme colors.
6. Keep relevant context selectors and decision controls visible.
7. Capture the viewport, or a focused screen region if the page is too long.
8. Inspect the image before saving it to the documentation repository.

Capture dark images separately in the browser when adding that variant.
Do not recolor the light image to simulate a dark screenshot.
Use 390 × 844 at scale factor 2 for optional mobile captures.
Check that labels and action controls remain legible at the rendered documentation width.
Screenshots supplement the procedure; visible labels must agree with the written instructions.

## Add the image to its guide

Store a WebP file at the plan's path under `public/images/current/`.
For example, `/images/current/gradebook-light-desktop.webp` maps to `public/images/current/gradebook-light-desktop.webp`.
Aim for a file below 500 KB while retaining readable text.
Use lossless or high-quality compression when a small label becomes blurred.

Replace the corresponding `<!-- screenshot: <id> ... -->` comment with a Markdown figure.
Use the alternative text and caption from the plan, adjusting them to describe the actual capture.
For example:

```md
![The marksheet shows numeric marks and explicit entry states.](/images/current/gradebook-light-desktop.webp)

Review marks and entry states before submitting results.
```

Place the image beside the procedure or decision it explains.
Do not add every image to a separate gallery.
Do not make instructions depend on image text or color alone.
When adding dark or mobile variants, use descriptive filenames and check their accessible fallback.
Keep absent variants out of the page markup.

## Verify the images

1. Inspect each screenshot for correct state, readable labels, and fictional data.
2. Confirm dimensions, color mode, and theme for at least one generated image.
3. Build the documentation and run `npm run docs:check`.
4. Confirm that added images render under the Pages base path.
5. Check the guide at desktop and mobile widths.
6. Update the capture plan's status after all planned images are present and reviewed.

The checks allow planned slots while images are pending.
An image that exists must be referenced by its guide and have alternative text and a caption.
The checks reject unknown routes, duplicate image paths, missing guide slots, and broken built image links.
To require every planned image before a final visual review, run:

```sh
REQUIRE_DOC_SCREENSHOTS=1 npm run docs:check
```

Use Sail for these Node commands when the docs checkout is inside the application workspace.
The strict image check will fail until Claude has added all planned captures.

## Keep captures current

Recapture a screen when its layout, labels, workflow, or required state changes.
Review linked procedures whenever an image is replaced.
Keep V2 images in their existing scope. Do not use them to illustrate the current application.
