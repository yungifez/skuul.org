# Facilities and bookings

Use **Facilities** to manage rooms and other campus resources.
You need facility read or management permission.
Timetable rooms and facility bookings share availability checks.

## Set up a facility

1. Create the resource with its name and kind.
2. Set its capacity and availability.
3. Check that the record belongs to the intended campus.
4. Keep it available while it can be booked.

Mark a resource out of use when it cannot be used.
A timetable conflict review checks rooms that are out of use.
A room's capacity does not replace section enrollment capacity.

## Book a resource

<!-- screenshot: facility-booking
Path: /images/current/facility-booking-light-desktop.webp
Alt: The facility page shows availability and a dated booking.
Caption: Facility bookings share availability checks with published timetables.
-->

1. Select the facility.
2. Enter the purpose, start time, and end time.
3. Check the date and teaching context.
4. Save the booking.
5. Review any overlap or availability message.

The end must follow the start, and a new booking cannot end in the past.
The application checks overlapping bookings and published timetable use.
A resource out of use cannot accept an ordinary booking.

Cancel an eligible booking when the resource is no longer needed.
Completed history cannot be changed as if it were a future booking.
The booking does not rewrite a published timetable.
Use the timetable revision or dated override workflow for teaching schedule changes.

## Use facility and booking controls

Read with `read facility`, change resources with `manage facility`, and book with `book facility`.
Select **Share something new** to enter **Name**, **Kind**, capacity, and notes.
Select **Add it**. Use **Change** and **Save** to edit the resource.
Name must be unique in the campus and accepts 120 characters.
Capacity accepts integers from 1 to 100000; notes accept 1000 characters.

1. Select **Book** beside the intended resource.
2. Verify **What**, then enter **From** and **Until**.
3. Enter **What it is for**, up to 255 characters.
4. Select **Book it**.
5. Review the saved interval under **Booked next**.

Until must follow From, and a new booking must not finish in the past.
Use **Give it up** to cancel an eligible future booking.
Enter the optional cancellation reason, then confirm **Give it up**.
Select **Bring back into use** when an unavailable resource becomes available again.

| Problem | Action |
| --- | --- |
| Booking overlaps a lesson | Review the published timetable's room use. |
| Booking overlaps another reservation | Change the interval or have the authorized holder cancel that reservation. |
| Resource is unavailable | Check its in-use state before selecting another room. |
| Old booking cannot be cancelled | Historical completed use is not a future reservation. |

## Check the result

- Check the resource, booking interval, and saved purpose.
- Verify that a conflicting booking is rejected.

See [timetables](../academics/timetables) and [calendar events](./calendar).
