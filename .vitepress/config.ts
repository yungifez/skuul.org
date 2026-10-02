import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Skuul',
  base: '/skuul.org/',
  description: 'School management documentation',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Current development', link: '/current/introduction' },
      { text: 'User guides', link: '/current/using/workspace' },
      { text: 'Developers', link: '/current/development' },
      { text: 'V2 releases', link: '/v2/introduction' }
    ],
    sidebar: {
      '/current/': [
        {
          "text": "Start here",
          "collapsed": false,
          "items": [
            {
              "text": "Current development",
              "link": "/current/introduction"
            },
            {
              "text": "Use the workspace",
              "link": "/current/using/workspace"
            },
            {
              "text": "Application terms",
              "link": "/current/using/glossary"
            },
            {
              "text": "Troubleshooting",
              "link": "/current/using/troubleshooting"
            }
          ]
        },
        {
          "text": "Install and operate",
          "collapsed": true,
          "items": [
            {
              "text": "Requirements",
              "link": "/current/getting-started/requirements"
            },
            {
              "text": "Local installation",
              "link": "/current/getting-started/installation"
            },
            {
              "text": "Deployment",
              "link": "/current/getting-started/deployment"
            },
            {
              "text": "Updating",
              "link": "/current/getting-started/updating"
            },
            {
              "text": "Backups and monitoring",
              "link": "/current/operations"
            }
          ]
        },
        {
          "text": "Administration",
          "collapsed": true,
          "items": [
            {
              "text": "Organizations and domains",
              "link": "/current/administration/organizations"
            },
            {
              "text": "Campus settings and setup",
              "link": "/current/administration/campuses"
            },
            {
              "text": "Optional features",
              "link": "/current/administration/features"
            },
            {
              "text": "Roles and permissions",
              "link": "/current/administration/permissions"
            }
          ]
        },
        {
          "text": "People",
          "collapsed": true,
          "items": [
            {
              "text": "Accounts, invitations, and profile security",
              "link": "/current/people/accounts"
            },
            {
              "text": "Students and enrollment",
              "link": "/current/people/students"
            },
            {
              "text": "Admission queues",
              "link": "/current/people/admissions"
            },
            {
              "text": "Parents and guardian links",
              "link": "/current/people/guardians"
            },
            {
              "text": "Campus moves and transfers",
              "link": "/current/people/moves"
            },
            {
              "text": "Share student records between campuses",
              "link": "/current/people/sharing"
            }
          ]
        },
        {
          "text": "Teaching and assessment",
          "collapsed": true,
          "items": [
            {
              "text": "Academic calendars and closure",
              "link": "/current/academics/calendars"
            },
            {
              "text": "Levels, sections, and teaching models",
              "link": "/current/academics/structure"
            },
            {
              "text": "Subjects, course offerings, and teachers",
              "link": "/current/academics/offerings"
            },
            {
              "text": "Attendance registers",
              "link": "/current/academics/attendance"
            },
            {
              "text": "Timetables and lesson cover",
              "link": "/current/academics/timetables"
            },
            {
              "text": "Syllabi, coverage, and lesson notes",
              "link": "/current/academics/syllabi"
            },
            {
              "text": "Exam schedules",
              "link": "/current/academics/exams"
            },
            {
              "text": "Gradebooks and grading scales",
              "link": "/current/academics/gradebooks"
            },
            {
              "text": "Result approval and official documents",
              "link": "/current/academics/results"
            },
            {
              "text": "Promotion, graduation, and graduation plans",
              "link": "/current/academics/progression"
            }
          ]
        },
        {
          "text": "Campus operations",
          "collapsed": true,
          "items": [
            {
              "text": "Calendar events and closure days",
              "link": "/current/operations/calendar"
            },
            {
              "text": "Notices and email preferences",
              "link": "/current/operations/notices"
            },
            {
              "text": "Behaviour and safeguarding cases",
              "link": "/current/operations/cases"
            },
            {
              "text": "Support plans and health records",
              "link": "/current/operations/wellbeing"
            },
            {
              "text": "Staff records, availability, and leave",
              "link": "/current/operations/staff"
            },
            {
              "text": "Groups and programmes",
              "link": "/current/operations/groups-programmes"
            },
            {
              "text": "Facilities and bookings",
              "link": "/current/operations/facilities"
            },
            {
              "text": "Boarding houses, rolls, and nights away",
              "link": "/current/operations/boarding"
            },
            {
              "text": "Library catalogue, loans, and reservations",
              "link": "/current/operations/library"
            },
            {
              "text": "Import student and staff CSV files",
              "link": "/current/operations/imports"
            },
            {
              "text": "Report exports",
              "link": "/current/operations/reports"
            }
          ]
        },
        {
          "text": "Finance",
          "collapsed": true,
          "items": [
            {
              "text": "Fees and invoices",
              "link": "/current/finance/invoices"
            },
            {
              "text": "Payments, credit, refunds, and corrections",
              "link": "/current/finance/payments"
            },
            {
              "text": "Financial periods, expenses, deposits, and budgets",
              "link": "/current/finance/ledger"
            }
          ]
        },
        {
          "text": "Families",
          "collapsed": true,
          "items": [
            {
              "text": "Family portal",
              "link": "/current/family/portal"
            },
            {
              "text": "Family requests and the staff inbox",
              "link": "/current/family/requests"
            }
          ]
        },
        {
          "text": "Developers and reference",
          "collapsed": true,
          "items": [
            {
              "text": "Development",
              "link": "/current/development"
            },
            {
              "text": "Application architecture",
              "link": "/current/reference/architecture"
            },
            {
              "text": "Data model and record ownership",
              "link": "/current/reference/data-model"
            },
            {
              "text": "Authorization, privacy, and audit design",
              "link": "/current/reference/security"
            },
            {
              "text": "Extend the application",
              "link": "/current/reference/extensions"
            },
            {
              "text": "CSV examples and import design",
              "link": "/current/reference/imports"
            },
            {
              "text": "Configuration reference",
              "link": "/current/reference/configuration"
            },
            {
              "text": "Commands and scheduled work",
              "link": "/current/reference/commands"
            },
            {
              "text": "Current implementation limits",
              "link": "/current/reference/limitations"
            },
            {
              "text": "Screenshot capture brief",
              "link": "/current/reference/screenshots"
            },
            {
              "text": "Documentation coverage",
              "link": "/current/reference/coverage"
            }
          ]
        }
      ],
      '/v2/': [
        {
          text: 'V2 releases',
          items: [
            { text: 'Introduction', link: '/v2/introduction' }
          ]
        },
        {
          text: 'Getting started',
          items: [
            { text: 'Requirements', link: '/v2/getting-started/requirements' },
            { text: 'Installation', link: '/v2/getting-started/installation' },
            { text: 'Deployment', link: '/v2/getting-started/deployment' },
            { text: 'Updating', link: '/v2/getting-started/updating' }
          ]
        }
      ]
    },
    search: { provider: 'local' },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yungifez/skuul' }
    ]
  }
})
