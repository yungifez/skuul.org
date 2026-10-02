# Troubleshooting

Check the selected campus, cycle, and period before reporting a workflow problem.
Copy the visible error, the page, and the steps that produced it.
Exclude passwords, invitation tokens, and private learner information from public reports.

| Problem | Check |
| --- | --- |
| Invitation does not work | Check expiry and whether a newer invitation replaced it. Ask the administrator to issue a new link. |
| Sign-in is blocked | Check account status, email verification, required password change, and two-factor authentication. |
| Campus is missing | Check active campus membership and the selected account. Organization membership alone is insufficient. |
| Menu entry is missing | Check campus permissions and the optional feature switch. |
| Page needs a period | Select the working cycle and teaching period. |
| Save is refused after closure | Check academic or financial period status for that workflow. |
| Grade cannot be published | Check roster, missing entries, pending revisions, and the reviewer's authority. |
| Family sees an old result | The newer revision may still need approval. The portal shows the latest approved revision. |
| Guardian sees no learner | Check the guardian link, enrollment state, portal feature, and area controls. |
| Placement has no space | Check capacity, active and suspended enrollments, and open admission offers. |
| Timetable will not publish | Review teacher, room, slot, facility, and availability conflicts. |
| Import rejects email | Use a valid email with a mail domain that passes DNS validation. |
| Import rejects section | Check exact destination level and section names in the selected cycle. |
| Report stays queued | The operator must check the queue worker and failed jobs. |
| Notice remains scheduled | The operator must check the scheduler and its clock. |
| Email does not arrive | Check recipient address, notice preferences, mail transport, queue worker, and mail logs. |
| Uploaded photo is missing | Check public storage and the storage link. |
| Assets fail to load | Build the frontend assets and check the deployment manifest. |

## Operator checks

Use these read-only inspection commands through Sail in the development environment:

```sh
vendor/bin/sail artisan queue:failed
vendor/bin/sail artisan schedule:list
vendor/bin/sail artisan route:list --except-vendor
vendor/bin/sail artisan skuul:check-backup
```

Review recent application logs with the time and affected workflow.
Use the health endpoint and heartbeat information described in [operations](../operations).
Retry failed work only after checking whether it already changed records.
A repeated payment, import, or notification can have a different effect from a repeated page request.

See [known limits](../reference/limitations), [deployment](../getting-started/deployment), and [backup recovery](../operations).
