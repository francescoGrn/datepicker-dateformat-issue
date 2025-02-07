# Date Format Update Issue in PrimeNG Datepicker

This sample application demonstrates an issue with the reactive update of the date format in a primeNG component.

## Problem Description

When the date format is changed (e.g., from European format `dd/mm/yy` to American format `mm/dd/yy`), the datepicker component does not immediately reflect the change. The user needs to re-select the date for the new format to be applied. So this behavior is not fully reactive.

## Steps to Reproduce

1. Select a date in the datepicker.
2. Change the date format using the provided buttons.
3. Observe that the displayed date does not update to the new format until the date is re-selected.

## Expected Behavior

The datepicker should update the displayed date immediately when the format is changed, without requiring the user to re-select the date.
