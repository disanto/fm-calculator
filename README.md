# fm-calculator

## Intro
This was a project assignment for the Frontend Master's Web Dev course (https://btholt.github.io/intro-to-web-dev-v2/js-project/). This code is pretty rough. However, I got it done and I'm happy with it. In all it took me under 7 hours over the course of a few days.

## Process
I tackled this project by creating little stories / tasks and then tackling them one at a time. I tracked these tasks and other thoughts in Notes since this is just for my own education. I'll share my unfiltered nonsense below so that you can get a peak in at the chaos.

## Tasks
1. Wire up event handling. Catch button press events and log out that the right value is being returned. ✅
2. Create switch statement to filter actions and test if stubbed function fires. ✅
3. Update result to reflect button pressed if number value. ✅
4. Found bug with input becoming NaN, found cause to be event listening capturing padding around keypad. Need to either capture and ignore those errant taps or adjust the design to get rid of the gaps. RESOLUTION: Still was firing for some odd reason, added catch for NaN and it doesn’t corrupt data now. ✅
5. Start tracking work on GitHub. Set it up before continuing. ✅
6. Just realized that in order for backspace to work, need to have the display text linked to an array so I can pop and push on values. ✅
7. Get addition and equals going. ✅
8. Add switch to equals so it can track other operations.✅
9. Add Multiplication and Division. ✅

## Enhancements (Things to add/fix someday)
- Fix CSS Issues on Safari and Firefox. Might be some flex box weirdness.
- Fix ability to spam 0 and create weird strings like 00000
- Re-enable ability to repeat last operation with equals.
- Remove rounding in division to allow for numbers with decimals.
- Re-Factor code once I’m more skilled.
