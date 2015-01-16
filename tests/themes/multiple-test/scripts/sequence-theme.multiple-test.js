/*!
 * Theme Name: Multiple Test
 * Version: 0.1.0
 * Theme URL: http://sequencejs.com/themes/multiple-test/
 *
 * A theme to test multiple instances
 *
 * Powered by Sequence.js - The open-source CSS animation framework.
 *
 * Author: Ian Lunn
 * Author URL: https://ianlunn.co.uk/
 *
 * Multiple Test Sequence Theme Copyright (c) Ian Lunn 2014
 * License: MIT http://opensource.org/licenses/MIT
 *
 * Sequence.js and its dependencies are copyright (c) Ian Lunn 2014 unless otherwise stated.
 */

// Get the Sequence elements
var sequenceElement1 = document.getElementById("sequence1");
var sequenceElement2 = document.getElementById("sequence2");

var pause1 = document.getElementById("pause1");
var pause2 = document.getElementById("pause2");

// Place your Sequence options here to override defaults
// See: https://github.com/IanLunn/Sequence/blob/v2/DOCUMENTATION.md
var options = {
  keyNavigation: true
}

// Launch Sequence on the elements, and with the options we specified above
var mySequence1 = sequence(sequenceElement1, options);
var mySequence2 = sequence(sequenceElement2, options);

mySequence1.paused = function() {
  pause1.innerHTML = "Unpause";
}

mySequence1.unpaused = function() {
  pause1.innerHTML = "Pause";
}

mySequence2.paused = function() {
  pause2.innerHTML = "Unpause";
}

mySequence2.unpaused = function() {
  pause2.innerHTML = "Pause";
}
