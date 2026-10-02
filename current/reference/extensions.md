# Extend the application

Use the existing contract and registry when extending reports, imports, payment channels, or document rendering.
Keep the domain data rules separate from file or provider handling.
Read the installed package versions and the relevant project rules first.

## Add a report or export format

Implement `App\Contracts\Report` with its stable key, title, permission, columns, and rows.
Register the class in `App\Services\Report\ReportRegistry`.
Build rows from explicit parameters, including the recorded campus and academic context.
Test the report with another campus's records present.

Implement `App\Contracts\ExportFormat` to add a file format.
Register it in `ExportFormatRegistry`.
The existing formats are CSV, XLSX, and PDF.
`BuildReport` receives a report-run identifier and stores the output on the local disk.
It supplies the saved campus, cycle, academic-period, and financial-period parameters.
Ready runs are skipped on repeat handling.
Test failures and authorized downloads as well as the output rows.

## Add an importer

Implement `App\Contracts\Importer` and register it in `ImportRegistry`.
Declare required and optional columns and row validation rules.
Implement one row's create-or-update operation.
The import runner stages validation, applies rows in separate transactions, and records source mappings.
Do not put file parsing or batch state changes into the importer.
See [import reference](./imports).

## Add a payment channel

Implement `App\Contracts\PaymentChannel` and register it in `PaymentChannelRegistry`.
Define the key, label, description, account purpose, reference requirement, and availability.
An online provider also implements `OnlinePaymentGateway`.
`StripeChannel` implements checkout, confirmation, and signed callback parsing.
It becomes available in the registry when its secret is configured.

The current web routes do not connect a family checkout or provider callback workflow.
Setting Stripe secrets alone does not complete that integration.
A complete gateway integration needs authorized routes, payment-intent correlation, settlement verification, and repeat-callback protection.
Record money only after checking the provider's settled amount, currency, reference, and intended learner.
Do not treat a return-page visit as proof of settlement.

## Add a document renderer

Implement `App\Contracts\DocumentRenderer` and register it in `DocumentRendererRegistry`.
The built-in renderer uses Dompdf. The browser renderer calls a configured external HTTP service.
`PrintService::page()` serves an HTML print view.
`PrintService::render()` produces document bytes; `download()` returns a PDF download.
A configured but unavailable supported renderer can fall back to an available renderer.
An unknown renderer key is rejected.
Test the generated document and the service-failure behavior.

## Add a domain workflow

Use the area's existing action or service pattern.
Authorize the entry point, validate ownership and state, and keep dependent writes in a transaction.
Record the applicable audit event.
Use named routes and existing Blade or Livewire components.
Add meaningful workflow tests and update the corresponding guide and coverage inventory.
