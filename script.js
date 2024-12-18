var system_type = [
  "<h2 class='die-result-heading'>MRS:</h2><h2 class='die-result-subheading'>Traditional</h2><p class='die-result-desc'>MRS using the tail end of the rope.</p>",
  "<h2 class='die-result-heading'>MRS:</h2><h2 class='die-result-subheading'>Split Tail</h2><p class='die-result-desc'>MRS using a mechanical hitch or cordage splittail — typically an eye&nbsp;to&nbsp;eye sling for closed hitches or single eye for a Blake's hitch.<p class='die-result-desc'></p>",
  "<h2 class='die-result-heading'>SRS:</h2><h2 class='die-result-subheading'>ground anchor</h2><p class='die-result-desc'>Ground Anchor using tie-off of climber or rescuer's choice.</p><p class='die-result-desc'>From less to more difficult:<br>• simple cinching base tie<br>• half-hitch + cinching base tie<br>• base tie with a break-in knot (alpine butterfly)<br>• releasable anchor (Inline Munter Mule Overhand)<br>• full rescue rig (base anchor + descender)</p>",
  "<h2 class='die-result-heading'>SRS:</h2><h2 class='die-result-subheading'>canopy anchor with full-strength pulldown</h2><p class='die-result-desc'>Canopy Anchor with a full strength rope & attachment used as the pulldown. Think limb cinch formed mid-line in a normal climbing rope.</p>",
  "<h2 class='die-result-heading'>SRS:</h2><h2 class='die-result-subheading'>canopy anchor without pulldown</h2><p class='die-result-desc'>Canopy Anchor without a pulldown (or not a full-strength one).</p>",
  "<h2 class='die-result-heading'>Tyrolean:</h2><h2 class='die-result-subheading'>Static</h2><p class='die-result-desc'>Climber is on a Tyrolean traverse with a fixed-length non-adjustable tether (no up/down). Think fixed cowstail, sling or zipline tether.</p><p class='die-result-desc'>System is able to traverse along the line if in a 'Functional' state.</p>"
];


var climber_system_state = [
  "<h2 class='die-result-heading'>Weighted:</h2><h2 class='die-result-subheading'>Non-functional</h2><p class='die-result-desc'>Climber is resting with their weight on the climbing system, and that system WILL NOT ascend or descend — completely seized.</p>",
  "<h2 class='die-result-heading'>Weighted:</h2><h2 class='die-result-subheading'>Functional</h2><p class='die-result-desc'>Climber is resting with their weight on the climbing system, but that system WILL ascend or descend (as applicable for the system).</p>",
  "<h2 class='die-result-heading'>Weighted:</h2><h2 class='die-result-subheading'>Fixable</h2><p class='die-result-desc'>Climber is resting with their weight on the climbing system, and that system WILL NOT ascend or descend until the weight has been removed and the device cleared/fixed.</p><p class='die-result-desc'>Consider an appropriate reason the device is initially non-functional, such as the hair or clothing stuck in the device.</p><p class='die-result-desc'>Decide if the device needs to be removed entirely from the rope (if possible) or just unweighted temporarily. Or perhaps the device will only allow descent after ascending slightly to fix the problem.</p>",
  "<h2 class='die-result-heading'>Unweighted:</h2><h2 class='die-result-subheading'>Non-functional</h2><p class='die-result-desc'>Climber is not weighting the system, but that system will not function, is incapacitated in some way or otherwise not trustworthy.</p>",
  "<h2 class='die-result-heading'>Unweighted:</h2><h2 class='die-result-subheading'>Functional</h2><p class='die-result-desc'>Climber is not weighting the system, but the system is known to function properly under weight.</p>",
  "<h2 class='die-result-heading'>Weighted:</h2><h2 class='die-result-subheading'>Unknown status - roll again once climber reached</h2><p class='die-result-desc'>Begin the rescue without knowing the status of the climber's system. Plan accordingly.</p><p class='die-result-desc'>Roll again once the climber is accessed.</p>"
  ];

  
var rescuer_location_and_rope = [
"<h2 class='die-result-heading'>Above:</h2><h2 class='die-result-subheading'>Independent Rope</h2><p class='die-result-desc'>Rescuer begins ABOVE the climber in the tree, with their own independent rope system.</p><p class='die-result-desc'>For additional challenge, roll 'Climber System Type' die again to determine the system the rescuer must use.</p>",
"<h2 class='die-result-heading'>Above:</h2><h2 class='die-result-subheading'>Shared Rope</h2><p class='die-result-desc'>Rescuer begins ABOVE the climber in the tree, but must access & rescue the climber using the SAME ROPE the climber is using.</p>",
"<h2 class='die-result-heading'>Below:</h2><h2 class='die-result-subheading'>Independent Rope</h2><p class='die-result-desc'>Rescuer begins BELOW the climber (on the ground or in the tree), with their own independent rope system.</p><p class='die-result-desc'>For additional challenge, roll 'Climber System Type' die again to determine the system the rescuer must use.</p>",
"<h2 class='die-result-heading'>Below:</h2><h2 class='die-result-subheading'>Shared Rope</h2><p class='die-result-desc'>Rescuer begins BELOW the climber (on the ground or in the tree), but must access & rescue the climber using the SAME ROPE the climber is using.</p>",
"<h2 class='die-result-heading'>Traversing:</h2><h2 class='die-result-subheading'>Indepedent Rope</h2><p class='die-result-desc'>Incident has occured with the climber mid-traverse, and the rescuer may not use an anchor directly overhead of the climber to access or perform the rescue (think tree-to-tree traverse).</p><p class='die-result-desc'>The rescuer may use their own independent system to access the climber.</p><p class='die-result-desc'>Choose the second traversing system on the climber (assuming they are not on a Tyrolean), or roll 'Climber System Type' an additional time.</p><p class='die-result-desc'>For added challenge, roll 'Climber System Type' 1-2 times to determine the system the rescuer must use.</p>",
"<h2 class='die-result-heading'>Traversing:</h2><h2 class='die-result-subheading'>Shared Rope</h2><p class='die-result-desc'>Incident has occured with the climber mid-traverse, and the rescuer may not use an anchor directly overhead of the climber to access or perform the rescue (think tree-to-tree traverse).</p><p class='die-result-desc'>The rescuer must access and rescue the climber using the ropes the climber is using.</p><p class='die-result-desc'>Choose the second traversing system on the climber (assuming they are not on a Tyrolean), or roll 'Climber System Type' an additional time.</p>"
]

var bonus_flavor = [
  "<h2 class='die-result-heading'>Knot Pass:</h2><h2 class='die-result-subheading'>on Access</h2><p class='die-result-desc'>On the way to access the climber the rescuer must pass a knot. If rescuing from above, the rescuer must pass a knot on descent. If rescuing from below, they will need to pass the knot during the ascent to the climber.</p><p class='die-result-desc'>May not make sense on a ground-based rescue.</p>",
  "<h2 class='die-result-heading'>Knot Pass:</h2><h2 class='die-result-subheading'>on Exit</h2><p class='die-result-desc'>While exiting the tree, the rescuer and climber must pass a knot.</p><p class='die-result-desc'>Variation: If on independent systems, only the rescuer or only the climber must pass the knot.</p><p class='die-result-desc'>If performing a ground based rescue - include a knot pass on the descent device / system.</p>",
  "<h2 class='die-result-heading'>Transfer Required:</h2><h2 class='die-result-subheading'>on Descent</h2><p class='die-result-desc'>While exiting the tree, the rescuer and climber must perform a transfer to a new anchor/tie-in-point and climbing system.</p>",
  "<h2 class='die-result-heading'>Climber has use of:</h2><h2 class='die-result-subheading'>arms</h2><p class='die-result-desc'>Climber is conscious and may assist using one or both arms / hands (climber/rescuer decision).</p><p class='die-result-desc'>For variation, perhaps the climber may use their hand but lack arm strength. Or the hand is injured but can still position themselves using forearm/elbow.</p>",
  "<h2 class='die-result-heading'>Climber has use of:</h2><h2 class='die-result-subheading'>legs</h2><p class='die-result-desc'>Climber is conscious and may assist using one or both legs (climber/rescuer decision).</p>",
  "<h2 class='die-result-heading'>Adverse Conditions</h2><p class='die-result-desc'>Examples Include:</p><p class='die-result-desc'>raining, injured rescuer, minimal equipment, combative climber, etc. Use caution if used as the basis for practice rescue - don't cause a real accident.</p>"
  ]

  var dice = {
    roll: function (list) {
      var randomNumber = Math.floor((Math.random()*list.length)) ;
      return list[randomNumber];
    }
  }



  //Prints dice roll to the page

function printNumber(number, elementId) {
    var die = document.getElementById(elementId);
    die.innerHTML = number;
    }

  var button = document.getElementById('button');

function rollDice() {
    var system_type_result = dice.roll(system_type);
    var climber_system_state_result = dice.roll(climber_system_state);
    var rescuer_location_and_rope_result = dice.roll(rescuer_location_and_rope);
    var bonus_flavor_result = dice.roll(bonus_flavor);
    printNumber(system_type_result, "die1");
    printNumber(climber_system_state_result, "die2")
    printNumber(rescuer_location_and_rope_result, "die3")
    printNumber(bonus_flavor_result, "die4")
    };
function rollDie(die) {
    var system_type_result = dice.roll(system_type);
    var climber_system_state_result = dice.roll(climber_system_state);
    var rescuer_location_and_rope_result = dice.roll(rescuer_location_and_rope);
    var bonus_flavor_result = dice.roll(bonus_flavor);
    if (die === "die1") {
      printNumber(system_type_result, "die1");
    }
    if (die === "die2") {
      printNumber(climber_system_state_result, "die2")
    }
    if (die === "die3") {
      printNumber(rescuer_location_and_rope_result, "die3")
    }
    if (die === "die4") {
      printNumber(bonus_flavor_result, "die4")
    }
    };