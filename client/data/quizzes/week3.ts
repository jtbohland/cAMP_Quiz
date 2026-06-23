import type { Quiz } from "../quiz-types.js";

export const week3Quizzes: Quiz[] = [
  {
    id: "day6", day: "Day 6", title: "The Competitive Landscape", week: "Week 3",
    questions: [
      {
        id: 1, type: "mc", lo: "LO3",
        text: "Late in discovery, your prospect mentions they're also evaluating Mixpanel. A Challenger doesn't get defensive — they use this as a Constructive Tension moment. What's your first move?",
        options: ["Immediately share Amplitude's competitive positioning deck — preparation and confidence signal you've been here before", "Ask what's drawing them to Mixpanel. The answer reveals their decision criteria, which tells you where to create tension around what Mixpanel can't solve — and where to lead to Amplitude's differentiated capability.", "Acknowledge it calmly and keep moving — bringing too much attention to a competitor elevates their perceived legitimacy in the deal", "Offer a head-to-head proof of concept — let the product do the talking rather than getting into a verbal comparison"],
        correct: 1,
        explanation: "Constructive Tension in competitive deals starts with curiosity, not defense. 'What's drawing you to Mixpanel?' is a Measured Investigation question — it surfaces the assumption you need to challenge. Once you understand their decision criteria, you can teach them something they haven't considered: what Mixpanel won't let them do at the scale or depth they'll eventually need. Launching into positioning before you understand their criteria is leading with your solution instead of leading to it.",
        resource: { label: "Competitive Landscape Slides", url: "https://docs.google.com/presentation/d/1ha9NRQs2GiT49ASGf7SiFKYTUcGIbgiveQ2HGhj0q00/edit" }
      },
      {
        id: 2, type: "mc", lo: "LO2",
        text: "A prospect says: 'We built our own internal analytics solution.' A Challenger responds with a Commercial Insight — not validation, not dismissal. What does that look like?",
        options: ["Validate the decision and pivot: 'That makes sense at your stage. Now that you're scaling, I'd love to understand what gaps have emerged — if any.'", "Challenge the assumption directly: 'Most teams that build internally underestimate the maintenance burden. I'd want to understand what it's costing your engineering team to keep it current — because that's usually where the real conversation starts.'", "Redirect to outcomes: 'Regardless of how you get your insights, the question is whether you're getting the depth you need to make confident product decisions. Are you?'", "Introduce social proof: 'Several companies at your scale started the same way and eventually made the switch — happy to share what drove that decision if it's useful.'"],
        correct: 1,
        explanation: "This is a textbook Challenger Commercial Insight moment — A-Gap-B structure. A = where they are (they built it themselves, which they're proud of). Gap = what they're underestimating (the hidden cost of maintaining it — engineering cycles that aren't building their product). B = the path forward (Amplitude removes that burden and accelerates insight velocity). The goal is to make them think differently about a cost they've normalized. Options A and C are too passive — they let the customer stay in their current frame. Option D is social proof without insight.",
        resource: { label: "Spekit: Compete Hub", url: "https://app.spekit.co/app/wiki/?&topic=a63d9637-dfbc-4573-943d-d7b829870188&tag=Compete" }
      },
      {
        id: 3, type: "mc", lo: "LO2",
        text: "Your champion tells you the committee is leaning toward Google Analytics because 'it's free and we already use Google products.' How do you address this?",
        options: ["Offer a discount to make the price gap versus Google's free tier smaller", "Acknowledge the valid point, then reframe: Google Analytics tracks traffic and acquisition, Amplitude tracks what users do inside the product and how behavior connects to retention. They solve different problems.", "Tell them Google Analytics will limit their ability to grow and they'll regret the choice later", "Accept the comparison and position Amplitude as the premium upgrade for when they're ready to invest more"],
        correct: 1,
        explanation: "The Google Analytics objection is about cost and switching friction, but it's also a positioning confusion. The right response is honest comparison: GA is a traffic/acquisition tool, Amplitude is a product analytics and experimentation platform. They're not competing for the same job — and framing that clearly lets you win on the right dimension.",
        resource: { label: "Spekit: Compete Hub", url: "https://app.spekit.co/app/wiki/?&topic=a63d9637-dfbc-4573-943d-d7b829870188&tag=Compete" }
      },
      {
        id: 4, type: "tf", lo: "LO3",
        text: "True or False: When Heap comes up in a deal, the most effective response is to immediately share a feature-by-feature comparison slide with the prospect.",
        options: ["True", "False"],
        correct: 1,
        explanation: "False. Leading with a feature comparison puts you on the defensive and frames the conversation as a spec war — which Amplitude may not always win on every feature. The more effective approach is to understand what's drawing the prospect to Heap, then shape your differentiation around their specific decision criteria and use the Spekit Compete hub for accurate, strategic positioning.",
        resource: { label: "Spekit: Compete Hub", url: "https://app.spekit.co/app/wiki/?&topic=a63d9637-dfbc-4573-943d-d7b829870188&tag=Compete" }
      },
      {
        id: 5, type: "mc", lo: "LO3",
        text: "Your champion says the committee is leaning toward Google Analytics because 'it's free and we already use Google products.' A Challenger builds Constructive Tension here rather than capitulating. What's the move?",
        options: ["Offer a discount to reduce the price gap — competing on value is harder when 'free' is the alternative", "Acknowledge the valid point, then reframe: Google Analytics tracks traffic and acquisition. Amplitude tracks what users do inside the product and how behavior drives retention. They solve different problems — and the one they're underestimating is costing them decisions they can't currently make.", "Ask the committee to run both tools in parallel for 30 days — a side-by-side comparison lets the product make the case without you having to argue it", "Tell them Google Analytics will limit their ability to scale — be direct about the risk of underinvesting in product analytics at their growth stage"],
        correct: 1,
        explanation: "This is Constructive Tension through reframing — the Challenger's version of the A-Gap-B structure. A = their current belief (Google Analytics covers their analytics needs). Gap = what they're underestimating (GA answers 'who came to our site and from where'; Amplitude answers 'what do users do inside the product and what drives retention'). B = the decision they can't make without Amplitude. You're not arguing that GA is bad — you're teaching them that the comparison is wrong, which is a much more powerful move than competing on price.",
        resource: { label: "Spekit: Compete Hub", url: "https://app.spekit.co/app/wiki/?&topic=a63d9637-dfbc-4573-943d-d7b829870188&tag=Compete" }
      },
      {
        id: 6, type: "mc", lo: "LO1",
        text: "Where do you go for up-to-date competitive positioning on a specific competitor during an active deal?",
        options: ["Google the competitor and read their website", "The Spekit Compete hub — it covers Adobe, Google, Heap, Mixpanel, In-House, and more with current positioning and talking points", "Ask a colleague what they've used in the past", "Create your own positioning based on the demo"],
        correct: 1,
        explanation: "The Spekit Compete hub is the designated, always-current resource for competitive positioning. It's built and maintained by the Product Marketing team so your positioning is accurate, strategic, and aligned with what the company stands behind — not ad hoc or potentially outdated.",
        resource: { label: "Spekit: Compete Hub", url: "https://app.spekit.co/app/wiki/?&topic=a63d9637-dfbc-4573-943d-d7b829870188&tag=Compete" }
      },
      {
        id: 7, type: "mc", lo: "LO3",
        text: "A prospect asks: 'Why should we choose Amplitude over your competitors?' A Challenger answers this question by Teaching, not pitching. What's the right structure?",
        options: ["Lead with Amplitude's differentiators and back each one with a proof point — specificity is what separates a credible answer from marketing speak", "Turn it back to them first — ask what's most important to their team before answering, so you can Tailor your response to what they actually care about", "Lead with the outcome they told you they care about most, connect it to where Amplitude is uniquely positioned to deliver it, and back it with a customer example. You're Teaching them why this matters for their specific situation — not pitching a feature list.", "Be transparent about trade-offs — acknowledging where competitors are strong builds credibility for the areas where Amplitude wins"],
        correct: 2,
        explanation: "A Challenger answers the 'why you' question by leading to their solution, not with it. You don't open with Amplitude's strengths — you open with the specific outcome the prospect told you they need, connect it to where Amplitude is genuinely differentiated, and prove it with a real customer story. This is Teach + Tailor in action: the answer is customized to their stated pain, not a generic capabilities overview. Option B (turning it back) delays the answer when they've directly asked for it — use what you already learned in discovery.",
        resource: { label: "Competitive Landscape Slides", url: "https://docs.google.com/presentation/d/1ha9NRQs2GiT49ASGf7SiFKYTUcGIbgiveQ2HGhj0q00/edit" }
      },
      {
        id: 8, type: "fill", lo: "LO1",
        text: "For real-time competitive intelligence, peer sharing on competitive deals, and asking colleagues how they've handled specific competitor scenarios, you should post in the ________ Slack channel.",
        correct: ["#competitive", "competitive"],
        placeholder: "slack channel name...",
        explanation: "The #competitive Slack channel is where competitive questions get answered, where colleagues share what's working in the field, and where deal-specific competitive support lives. It's a living resource maintained by both the PMM team and your peers.",
        resource: { label: "Competitive Landscape Slides", url: "https://docs.google.com/presentation/d/1ha9NRQs2GiT49ASGf7SiFKYTUcGIbgiveQ2HGhj0q00/edit" }
      },
      {
        id: 9, type: "mc", lo: "LO2",
        text: "A prospect you've been working for 6 weeks says they chose a competitor. What's the right next step beyond accepting the loss?",
        options: ["Wish them well and remove the account from your active pipeline entirely", "Log the competitive loss in Salesforce with the specific reason. This data feeds PMM's competitive strategy and helps the whole team understand patterns — accurate loss data is how positioning improves.", "Send a follow-up asking what you could have done differently — gather intel for next time", "Keep the opportunity open in Salesforce and continue nurturing — decisions sometimes reverse"],
        correct: 1,
        explanation: "Competitive loss data is some of the most valuable feedback in the GTM system. Accurate loss reasons in Salesforce feed directly into PMM's competitive strategy, product prioritization, and sales training. A poorly logged loss wastes the learning — and makes the same pattern harder to detect and fix.",
        resource: { label: "Competitive Landscape Slides", url: "https://docs.google.com/presentation/d/1ha9NRQs2GiT49ASGf7SiFKYTUcGIbgiveQ2HGhj0q00/edit" }
      },
      {
        id: 10, type: "mc", lo: "LO3",
        text: "You're in discovery and the prospect hasn't mentioned any competitors yet. Should you bring it up?",
        options: ["Yes — proactively asking 'are you evaluating other solutions?' is good discovery hygiene. Finding out early lets you shape your strategy instead of reacting to a competitor late in the deal.", "No — raising competitors unprompted can plant doubt in a prospect's mind about solutions they hadn't considered. Let it come up naturally.", "Only if you have a specific reason to suspect a competitor is involved — asking speculatively can make you look insecure about your position.", "Wait until Stage 3 — by then you have enough rapport that the competitive conversation is less likely to derail the relationship."],
        correct: 0,
        explanation: "Asking about the competitive landscape in discovery is standard MEDDPICC practice — it's part of understanding the Decision Process and Competition components. Finding out late that a competitor is in the deal is much worse than surfacing it early and adjusting your strategy accordingly.",
        resource: { label: "Discovery Question Repository", url: "https://docs.google.com/document/d/11po0r9LxK_tiooyYb64bdDeqhIhRX_7k-HSlPppf1A4/edit" }
      }
    ]
  },
  {
    id: "day7", day: "Day 7", title: "Account Planning Best Practices", week: "Week 3",
    questions: [
      {
        id: 1, type: "mc", lo: "LO1",
        text: "You've just been assigned a strategic account with $500K expansion potential. You've never worked it before. What's the right first move?",
        options: ["Schedule a discovery call to understand their current state and business priorities", "Build the account plan first — map customer goals, org structure, whitespace, and risks before any outreach", "Review their current Amplitude usage data and identify the lowest-hanging expansion opportunity", "Reach out to your CSM to get a health summary and warm introduction to the key contacts"],
        correct: 1,
        explanation: "Account planning starts with understanding, not action. Mapping goals, org structure, whitespace, and risks before you engage means your outreach is informed and targeted — not generic. Jumping straight to calls or usage data skips the strategic foundation that makes every subsequent action more effective.",
        resource: { label: "Account Planning Slides", url: "https://docs.google.com/presentation/d/1E6CvN9brHBGNkS2SZcslVNmaRyaiJhtvw4_Jrq-dJ2c/edit" }
      },
      {
        id: 2, type: "mc", lo: "LO2",
        text: "A customer has strong adoption in their Product team after 18 months, but their Data and Marketing teams aren't using Amplitude. In Challenger terms, what's the right way to frame this situation and your move?",
        options: ["This is a churn signal — teams that didn't adopt likely had a poor onboarding experience that needs to be addressed before renewal", "This is whitespace — untapped expansion within an existing account. Your move is to identify potential Mobilizers in the Data and Marketing teams, understand how they currently get insights, and build a Commercial Insight that teaches them what they're missing.", "This is a product-market fit issue — Amplitude may not map naturally to Data and Marketing team workflows, and forcing it creates adoption problems", "This is a CS problem — low cross-team adoption should be escalated to your CSM, who owns product adoption across the account"],
        correct: 1,
        explanation: "Challenger account planning requires identifying where the next Mobilizer lives, not just managing current relationships. The Product team is already bought in — but Data and Marketing teams represent untapped whitespace where a Mobilizer could drive internal expansion. Your job is to find those potential champions, teach them something about the cost of their current approach, and build a business case that they can take to their leadership. Waiting for CS to drive adoption is reactive; identifying the next Mobilizer is proactive account orchestration.",
        resource: { label: "Account Planning Slides", url: "https://docs.google.com/presentation/d/1E6CvN9brHBGNkS2SZcslVNmaRyaiJhtvw4_Jrq-dJ2c/edit" }
      },
      {
        id: 3, type: "mc", lo: "LO3",
        text: "You're running a POD account review and your SE mentions they've had two technical conversations with the customer you weren't looped into. A Challenger frames this as a coordination failure, not an initiative. What does it reveal and what changes?",
        options: ["Nothing concerning — SEs developing independent technical relationships is healthy. It means the customer is engaged across multiple levels of your team.", "The POD isn't operating from a shared account plan. When team members run parallel conversations without alignment, you risk sending mixed messages, missing Mobilizer signals, and losing control of how the customer frames the problem. The account plan is what keeps everyone in the same Challenger story.", "This is a communication process issue — establish a weekly POD sync so all customer interactions are logged and coordinated going forward", "The SE may have identified a new stakeholder Mobilizer. The priority is to debrief quickly and assess whether these contacts represent expansion opportunity before doing anything else."],
        correct: 1,
        explanation: "Challenger account orchestration is a team sport — and teams need a shared plan to stay in the same story. When your SE runs uncoordinated conversations, you risk multiple versions of the Commercial Insight landing with the customer, confusion about who owns what, and missed signals about emerging Mobilizers or Blockers. The account plan isn't a document — it's the coordination mechanism that keeps your POD delivering one coherent Challenger conversation. Option D is partially right but misses the root cause: the plan needs to be the operating system, not just a debrief trigger.",
        resource: { label: "Account Planning Slides", url: "https://docs.google.com/presentation/d/1E6CvN9brHBGNkS2SZcslVNmaRyaiJhtvw4_Jrq-dJ2c/edit" }
      },
      {
        id: 4, type: "tf", lo: "LO1",
        text: "True or False: Once an account plan is built, it should remain stable so the whole POD is working from the same version throughout the year.",
        options: ["True", "False"],
        correct: 1,
        explanation: "False. An account plan that doesn't evolve becomes a liability, not an asset. Champion turnover, shifting business priorities, new competitive threats, and opened whitespace all require the plan to be updated. A static account plan gives the POD false confidence that they understand an account they may have already lost touch with.",
        resource: { label: "Account Planning Slides", url: "https://docs.google.com/presentation/d/1E6CvN9brHBGNkS2SZcslVNmaRyaiJhtvw4_Jrq-dJ2c/edit" }
      },
      {
        id: 5, type: "mc", lo: "LO2",
        text: "Your account plan shows three plays: expanding into a new business unit, renewing and upselling the current contract, and adding a new product. The renewal is in 90 days. Where do you focus first?",
        options: ["The new business unit expansion — it has the highest long-term revenue potential", "All three in parallel — you don't want any play to go cold while you focus on one", "The renewal — it has a defined timeline, existing relationships, and active urgency. Losing the renewal undermines every other play.", "The new product add-on — it's the simplest play to execute and creates early momentum"],
        correct: 2,
        explanation: "Urgency and timeline should drive prioritization. A renewal in 90 days is a burning platform — if it goes sideways, the other plays become irrelevant. Secure the foundation first, then build on it. Pursuing the highest-upside play while neglecting an active renewal risk is a common and costly mistake.",
        resource: { label: "Account Planning Slides", url: "https://docs.google.com/presentation/d/1E6CvN9brHBGNkS2SZcslVNmaRyaiJhtvw4_Jrq-dJ2c/edit" }
      },
      {
        id: 6, type: "mc", lo: "LO3",
        text: "You use Salesforce to track your accounts but find yourself missing activity signals between formal check-ins. What problem does Momentum for Slack solve that Salesforce alone doesn't?",
        options: ["Momentum replaces Salesforce for opportunity tracking so you don't have to maintain both systems", "Momentum sends automated outreach to your accounts on your behalf so no signal goes unactioned", "Momentum surfaces account activity signals and next steps inside Slack, reducing the friction of staying current without requiring you to manually check Salesforce throughout the day", "Momentum generates account plans automatically based on your Salesforce opportunity data"],
        correct: 2,
        explanation: "Salesforce is a system of record — it captures what happened. Momentum is a system of action — it brings the signals that matter into your daily workflow so you catch them in real time. The gap it fills is the space between formal check-ins where deals quietly go cold or accounts quietly churn.",
        resource: { label: "Momentum (for Slack) Slides", url: "https://docs.google.com/presentation/d/129YPTu9OKQYZM6fFIMxlsJOqalqUWcwlLvLnC4lOvXI/edit" }
      },
      {
        id: 7, type: "mc", lo: "LO1",
        text: "You're building an org map for a new strategic account. Your champion is the VP of Product. What's the most important thing to capture beyond their name and title?",
        options: ["Their LinkedIn profile, tenure at the company, and previous employers", "Who they report to, who else influences the buying decision, and where the budget lives — so you understand the real decision path, not just your entry point", "Their communication style and preferred meeting cadence so you can tailor your outreach approach", "The names of all the direct reports who will actually be using Amplitude day-to-day"],
        correct: 1,
        explanation: "An org map is stakeholder intelligence, not a contact list. Knowing your champion's title is table stakes — what matters is understanding the decision path: who has budget authority, who can block the deal, and who your champion needs to convince internally. Without that, you're optimizing for the wrong relationships.",
        resource: { label: "Account Planning Slides", url: "https://docs.google.com/presentation/d/1E6CvN9brHBGNkS2SZcslVNmaRyaiJhtvw4_Jrq-dJ2c/edit" }
      },
      {
        id: 8, type: "fill", lo: "LO1",
        text: "An AE who reviews their account list at quarter-end and responds to whatever comes up is practicing reactive opportunity management. The goal of account planning is to shift to proactive account ________.",
        correct: ["orchestration"],
        placeholder: "one word...",
        explanation: "Proactive account orchestration means you're directing your accounts' trajectory — anticipating risks, sequencing plays, coordinating your POD, and staying ahead of what customers need. Reactive opportunity management responds to what happens; proactive orchestration shapes it.",
        resource: { label: "Account Planning Slides", url: "https://docs.google.com/presentation/d/1E6CvN9brHBGNkS2SZcslVNmaRyaiJhtvw4_Jrq-dJ2c/edit" }
      },
      {
        id: 9, type: "mc", lo: "LO3",
        text: "Your champion left and her replacement emails asking to 'evaluate whether to continue with Amplitude.' Usage is healthy. Applying Challenger stakeholder thinking, what's your diagnosis and first move?",
        options: ["Send a usage report immediately — healthy data is your strongest asset and lets the numbers do the selling", "Prepare a retention offer — new stakeholders use transitions as negotiating leverage, so getting ahead of pricing signals good faith and reduces friction", "Diagnose the new stakeholder first. Are they a Mobilizer who'll champion renewal once they understand the value? A Talker who's friendly but can't drive the decision? Or a Blocker who sees this as an opportunity to change tools? Your response depends entirely on who you're dealing with — and that requires a conversation, not a report.", "Escalate to your CSM — a new stakeholder evaluating the platform is a customer success conversation before it's a commercial one"],
        correct: 2,
        explanation: "Challenger stakeholder management starts with diagnosis. A new stakeholder questioning the contract is an unqualified contact — you don't know yet whether they're a Mobilizer (attracted to insight, can drive internal change), a Talker (friendly, accessible, but can't move decisions), or a Blocker (looking for a reason to change). Sending a report assumes they'll be persuaded by data. Getting on a call and running them through the Challenger lens — healthy skepticism? 'We' language? Do they ask thought-provoking questions? — tells you which motion to run. The diagnosis determines the strategy.",
        resource: { label: "Account Planning Slides", url: "https://docs.google.com/presentation/d/1E6CvN9brHBGNkS2SZcslVNmaRyaiJhtvw4_Jrq-dJ2c/edit" }
      },
      {
        id: 10, type: "mc", lo: "LO3",
        text: "You have 15 accounts. Three are strategic with $200K+ potential, eight are mid-market, and four are smaller. Your manager asks how you're distributing your account planning time. What's the right answer?",
        options: ["Equal time across all 15 — every customer relationship deserves the same investment", "Focused on the eight mid-market accounts — they represent the most volume and pipeline diversity", "Concentrated on the three strategic accounts with deep plans, lighter structured plans for mid-market, and minimal planning overhead for smaller accounts", "Only on accounts with active opportunities — planning without an open deal doesn't generate pipeline"],
        correct: 2,
        explanation: "Account planning effort should be proportional to opportunity size and strategic importance. Deep plans for strategic accounts, structured but lighter approaches for mid-market, and minimal overhead for smaller accounts. Equal time across all 15 sounds fair but practically means your most valuable accounts get diluted attention.",
        resource: { label: "Account Planning Slides", url: "https://docs.google.com/presentation/d/1E6CvN9brHBGNkS2SZcslVNmaRyaiJhtvw4_Jrq-dJ2c/edit" }
      }
    ]
  },
  {
    id: "day8", day: "Day 8", title: "Discovery That Accelerates", week: "Week 3",
    questions: [
      {
        id: 1, type: "mc", lo: "LO1",
        text: "You're 20 minutes into discovery and getting surface-level answers. In Challenger terms, what's most likely happening — and what's the fix?",
        options: ["The prospect isn't engaged — this may not be the right stakeholder, and you should request a different contact before continuing", "You're probably asking closed or feature-led questions that don't build Constructive Tension. Shift to Measured Investigation: open-ended questions that examine the customer's assumptions and explore the downstream cost of their current state — not what tools they use, but what decisions they can't make.", "The prospect is testing you — experienced buyers give surface-level answers early to see how sellers respond under pressure", "Your Commercial Insight may have landed flat — go back and reframe the insight before pushing deeper into discovery questions"],
        correct: 1,
        explanation: "Constructive Tension in discovery is built through Measured Investigation — asking targeted questions, examining assumptions, and using silence strategically. Surface-level answers are a signal that your questions aren't opening up assumptions. 'What tools are you using?' generates a list. 'What decisions are you making today that you wish you had more confidence in?' generates insight. The shift is from information-gathering to assumption-challenging — from a traditional discovery approach to a Challenger one.",
        resource: { label: "Discovery Question Repository", url: "https://docs.google.com/document/d/11po0r9LxK_tiooyYb64bdDeqhIhRX_7k-HSlPppf1A4/edit" }
      },
      {
        id: 2, type: "mc", lo: "LO2",
        text: "After a strong discovery call, you're reviewing your MEDDPICC. A Challenger knows which components most often hide the assumptions that kill late-stage deals. Which two are most commonly under-qualified?",
        options: ["Metrics and Decision Criteria — customers are often vague about what success looks like until you force them to define it, and underdefined metrics create scope creep", "Paper Process and Economic Buyer access. AEs routinely assume their champion has more internal influence than they do, and underestimate legal timelines. These two unexamined assumptions cause more deals to slip or die late than almost anything else.", "Champion and Competition — champions often overstate their internal capital, and competitive intel is frequently incomplete until the final evaluation stage", "Identify Pain and Decision Process — pain is often stated at surface level without real business impact, and decision processes are rarely as linear as customers describe"],
        correct: 1,
        explanation: "Challenger deals die on unexamined assumptions — and Paper Process and Economic Buyer are the two places where assumptions are most dangerous. 'My champion will handle the EB' and 'legal should be fast' are the most common forms of happy ears in late-stage deals. Measured Investigation applies here too: don't assume the EB is accessible, probe for it. Don't assume the paper process is straightforward, map it. The Challenger habit of examining assumptions in discovery must extend to the deal mechanics — not just the customer's business problem.",
        resource: { label: "MEDDPICC Discovery Discussion Guide", url: "https://docs.google.com/document/d/1dT5RcrPrDxQnnCPjjPXdmQVEfNtvliE92etJHLKl20Y/edit" }
      },
      {
        id: 3, type: "mc", lo: "LO3",
        text: "A prospect says: 'We need better analytics.' You write 'needs better analytics' in your Salesforce notes. Why does a Challenger reject this as a discovery output?",
        options: ["It's too vague to be useful — Salesforce notes need to be specific enough for your manager to understand the deal without asking follow-up questions", "It's a symptom, not a Commercial Insight. 'Better analytics' could mean anything. A Challenger digs to the business impact: which decisions can't they make today? What's it costing them? Who feels that pain most? The insight that drives urgency is always downstream of the surface statement.", "It belongs in the opportunity description, not the notes field — Salesforce hygiene matters for how deals appear in pipeline reviews", "It's missing quantification — a proper discovery note should include estimated cost, timeline, and the stakeholder who owns the problem"],
        correct: 1,
        explanation: "Challenger selling requires Commercial Insights — not symptom lists. 'Needs better analytics' is the customer's words, not your understanding of their business. A proper discovery output digs to the A-Gap-B: where they are (making product decisions without behavioral data), what the gap costs them (engineering cycles wasted on features that don't drive retention), and the path forward. That's the foundation of a business case. Without it, you can't Deepen the Pain in later conversations — and you can't lead to your solution credibly.",
        resource: { label: "MEDDPICC Discovery Discussion Guide", url: "https://docs.google.com/document/d/1dT5RcrPrDxQnnCPjjPXdmQVEfNtvliE92etJHLKl20Y/edit" }
      },
      {
        id: 4, type: "mc", lo: "LO3",
        text: "You've completed discovery with your main contact. They're enthusiastic and engaged. But you've only spoken to one person at the organization. What does Challenger stakeholder thinking tell you about the risk here?",
        options: ["It's an acceptable position — a strong, enthusiastic champion at the right level is sufficient to carry a deal internally, especially at smaller companies", "A single-threaded deal is high-risk regardless of how enthusiastic the contact is. Challenger research shows deals die when the one thread breaks — whether through champion departure, loss of internal support, or a Blocker emerging. Multi-threading early, using your champion to facilitate introductions, is Taking Control of the buying process.", "You should wait until Stage 3 to broaden stakeholder engagement — pushing for introductions too early can feel aggressive and damage the champion relationship you've built", "Enthusiasm is a verifier — it signals forward momentum in the buying process, which means additional stakeholders aren't a priority until the champion requests it"],
        correct: 1,
        explanation: "Taking Control means proactively managing the buying process — and single-threaded deals let the customer control it for you. Your enthusiastic contact may be a Mobilizer, a Talker, or someone whose internal capital you're overestimating. Challenger research identifies multi-threading as essential because a deal with one thread is a deal that dies when that thread breaks. The right move is to use your champion's enthusiasm to facilitate introductions — 'Who else in the organization would benefit from seeing this?' — before the deal depends on their continued access and influence.",
        resource: { label: "Discovery Question Repository", url: "https://docs.google.com/document/d/11po0r9LxK_tiooyYb64bdDeqhIhRX_7k-HSlPppf1A4/edit" }
      },
      {
        id: 5, type: "mc", lo: "LO2",
        text: "You want to build a Deal Room in Spekit for an active opportunity. Applying Challenger principles, what should it contain — and what should it not?",
        options: ["Your full Amplitude demo recording, the pricing proposal, and all available case studies — comprehensive resources let the customer self-serve at their own pace", "A curated set: the Commercial Insight you've been building together, customer stories Tailored to their industry and role, a Mutual Action Plan (MAP) that Takes Control of next steps, and content that Deepens the Pain you uncovered. The Deal Room is how you continue the Challenger conversation when you're not in the room.", "A summary of your discovery notes and a draft proposal — the Deal Room is most effective as a pre-closing tool once the customer has signaled intent", "Content selected by your SE and CS team — they know what resonates with technical and post-sale audiences better than the AE does at this stage"],
        correct: 1,
        explanation: "A Challenger Deal Room is a continuation of the commercial conversation — not an asset dump. It should contain the Commercial Insight you've been building (Teach), customer stories Tailored to their specific context (Tailor), and a MAP that defines verifiers and next steps (Take Control). The engagement data from the Deal Room — what they read, what they shared, what they ignored — also gives you the Measured Investigation signals you need to build Constructive Tension in your next conversation. A poorly curated Deal Room undermines the Challenger work you've done in the call.",
        resource: { label: "Spekit: How to Create Deal Rooms", url: "https://app.spekit.co/app/wiki/business_term/97c7a503-ee0e-4228-bd72-fa1116a6bfd3?type=business_term&expanded=true" }
      },
      {
        id: 6, type: "mc", lo: "LO3",
        text: "Your prospect has gone quiet for 10 days after a strong discovery call. You have a Deal Room shared with them. What's one advantage the Deal Room gives you in this situation?",
        options: ["You can see which content they've engaged with — if they're reading customer stories but not the pricing summary, that tells you exactly what to lead with when you re-engage.", "You can send them an automated nudge directly from the Deal Room, which is less intrusive than an email and tends to get higher response rates.", "You can lock access to the Deal Room until they respond, creating urgency without an explicit follow-up message.", "You can see if they've added new stakeholders to the Deal Room, which signals the evaluation is expanding internally."],
        correct: 0,
        explanation: "Deal Room engagement tracking is one of its most powerful features in a go-dark scenario. Knowing a prospect is actively reading content tells you the deal is still alive, and knowing which content they're engaging with tells you exactly what to lead with when you re-engage.",
        resource: { label: "Spekit: How to Create Deal Rooms", url: "https://app.spekit.co/app/wiki/business_term/97c7a503-ee0e-4228-bd72-fa1116a6bfd3?type=business_term&expanded=true" }
      },
      {
        id: 7, type: "fill", lo: "LO1",
        text: "MEDDPICC stands for Metrics, Economic Buyer, Decision Criteria, Decision Process, Paper Process, Identify Pain, Champion, and ________.",
        correct: ["competition", "competitor", "competitive"],
        placeholder: "last component...",
        explanation: "The C in MEDDPICC stands for Competition — knowing who else the prospect is evaluating and how Amplitude positions against them. Understanding the competitive landscape is part of your qualification framework, not just a late-stage concern.",
        resource: { label: "MEDDPICC Discovery Discussion Guide", url: "https://docs.google.com/document/d/1dT5RcrPrDxQnnCPjjPXdmQVEfNtvliE92etJHLKl20Y/edit" }
      },
      {
        id: 8, type: "mc", lo: "LO2",
        text: "The Glean Discovery Question Analyzer asks you to paste in a discovery question and then scores it 1–10. What's it actually evaluating?",
        options: ["Whether the question is grammatically correct and clearly worded", "The quality of the question across dimensions like open-endedness, insight potential, and deal relevance — then gives you a score, explanation, and improved variations to consider. It's a coaching tool.", "Whether the question matches questions that have worked well in similar deals previously", "Whether the question is compliant with Amplitude's discovery framework and approved methodology"],
        correct: 1,
        explanation: "The Discovery Question Analyzer is a coaching tool that helps you sharpen your questions before a call. It evaluates what makes a question good — does it open up insight, does it focus on the buyer's world, does it advance discovery — and gives you improved variations to consider.",
        resource: { label: "Discovery Question Repository", url: "https://docs.google.com/document/d/11po0r9LxK_tiooyYb64bdDeqhIhRX_7k-HSlPppf1A4/edit" }
      },
      {
        id: 9, type: "mc", lo: "LO3",
        text: "You finish a strong discovery call and feel confident about the deal. A Challenger post-call discipline requires you to do one specific thing before calling it qualified. What is it?",
        options: ["Write a detailed follow-up email to the prospect summarizing what was discussed — promptness and documentation signal professionalism", "Update the Salesforce stage to reflect the positive momentum — accurate pipeline data is more important than post-call analysis", "Run a MEDDPICC gap analysis: what do you actually know vs. what are you assuming? Challenger discipline means treating 'it felt great' as a hypothesis, not a verifier. Every unconfirmed MEDDPICC component is an assumption that could kill the deal later.", "Schedule the next meeting before doing anything else — the best post-call move is always securing forward momentum while enthusiasm is high"],
        correct: 2,
        explanation: "Challengers take control by tracking verifiers — actual customer actions that confirm forward progress — not feelings. 'It felt great' is not a verifier. After every discovery call, run the MEDDPICC through the Measured Investigation lens: what did the customer actually confirm vs. what are you inferring? Unconfirmed Economic Buyer access, assumed Paper Process timelines, and underdefined Decision Criteria are assumptions that compound into late-stage surprises. The Challenger habit of examining assumptions applies to your own deal perception as much as to the customer's business.",
        resource: { label: "MEDDPICC Discovery Discussion Guide", url: "https://docs.google.com/document/d/1dT5RcrPrDxQnnCPjjPXdmQVEfNtvliE92etJHLKl20Y/edit" }
      },
      {
        id: 10, type: "mc", lo: "LO2",
        text: "Your MAP in a Deal Room shows the prospect's legal review will take 4 weeks, but your close date is 3 weeks away. A Challenger Takes Control. What does that look like here?",
        options: ["Keep the close date and work the champion hard to compress the legal timeline — urgency from both sides usually finds a way", "Remove the legal step from the MAP to avoid alarming the prospect about the timeline conflict before you've had a chance to work the problem", "Update the close date in Salesforce to reflect reality and work with your champion to explore acceleration options — pre-sharing the MSA, parallel-pathing reviews, or internal escalation. A MAP is a verifier tool: it either shows forward motion or it surfaces risk early enough to fix it. This one surfaced risk. Act on it.", "Tell your manager the deal is still on track and address the legal timeline directly with the prospect in the next call"],
        correct: 2,
        explanation: "A MAP is a Taking Control tool — and a powerful request tool. When the MAP reveals a timeline gap, the Challenger response is to face it directly: update Salesforce (honest verifiers, not optimistic ones), use a powerful request with your champion ('What would it take to accelerate the legal review — and who do we need to involve to make that happen?'), and explore every legitimate option. Hiding the gap or keeping an optimistic close date is passive — it lets the process control you instead of the other way around.",
        resource: { label: "Spekit: How to Create Deal Rooms", url: "https://app.spekit.co/app/wiki/business_term/97c7a503-ee0e-4228-bd72-fa1116a6bfd3?type=business_term&expanded=true" }
      }
    ]
  },
  {
    id: "day9", day: "Day 9", title: "Pricing & Packaging 101", week: "Week 3",
    questions: [
      {
        id: 1, type: "mc", lo: "LO3",
        text: "A prospect asks you on your first call: 'How much does Amplitude cost?' A Challenger leads TO their solution, not WITH it. What's the right response?",
        options: ["Give them a range based on similar customers — setting a realistic expectation early prevents sticker shock later in the process", "Tell them pricing isn't discussed until Stage 3 — it's a policy and it protects the value conversation from being short-circuited by price", "Acknowledge the question, normalize that pricing is use-case dependent, and redirect: 'I want to make sure I show you the right structure for your situation — can you help me understand what you're trying to accomplish first?' Price without context anchors wrong and commoditizes the conversation.", "Share the entry-level price point to test their reaction — early price signals help you gauge budget seriousness before investing in a full discovery cycle"],
        correct: 2,
        explanation: "A Challenger leads TO their solution — and price is the last thing in that sequence, not the first. Answering price before you understand the customer's use case, scale, or outcomes is leading WITH your solution: it puts the product (and its cost) at the center before you've established the value. The right move is to acknowledge the question, normalize that Amplitude is use-case based, and redirect to discovery. Price will make much more sense — and be much more defensible — once you've built the Commercial Insight that justifies it.",
        resource: { label: "2026 Sales Finance & PPL Enablement Deck (Spekit)", url: "https://app.spekit.co/app/wiki/asset/101068d2-21c1-4d12-9f66-ab1f7fda4e8b?type=asset&expanded=true" }
      },
      {
        id: 2, type: "mc", lo: "LO3",
        text: "A prospect says: 'Your competitor is offering the same thing for 40% less.' A Challenger builds Constructive Tension instead of capitulating or getting defensive. What's the move?",
        options: ["Match the discount to stay competitive — losing on price when you're genuinely equal on product is an avoidable outcome", "Tell them the competitor's limitations will become apparent over time — position patience as strategic rather than defensive", "Challenge the comparison with curiosity before responding to the number. Ask what 'the same thing' means to them — which use cases, which outcomes. Then reanchor to value and the cost of getting this decision wrong. Price comparison only makes sense when the comparison is accurate.", "Offer a 20% discount as a show of good faith while you prepare a more detailed capabilities comparison"],
        correct: 2,
        explanation: "A Challenger doesn't accept the customer's frame — they examine the assumption behind it. 'The same thing for less' is almost never a true comparison, and accepting it at face value is exactly what a passive seller does. The Challenger move is Measured Investigation: probe what 'the same thing' means to them, expose the gap in the comparison, and then build Constructive Tension around the cost of choosing wrong — not just the price difference. The ROI conversation reframes price as an investment decision, which is where Challengers win.",
        resource: { label: "2026 Sales Finance & PPL Enablement Deck (Spekit)", url: "https://app.spekit.co/app/wiki/asset/101068d2-21c1-4d12-9f66-ab1f7fda4e8b?type=asset&expanded=true" }
      },
      {
        id: 3, type: "mc", lo: "LO2",
        text: "You're configuring a quote in CPQ and realize the structure your champion wants isn't standard — it involves custom bundling that's outside your normal packaging. What do you do?",
        options: ["Build the structure the customer wants and submit for approval after they agree to terms", "Stop and engage Deal Desk now via a case from the associated opportunity in Salesforce. Non-standard structures need approval before they're presented — not after the customer has already said yes to something you can't guarantee.", "Tell the customer the structure isn't possible and offer a standard packaging alternative", "Approximate the pricing yourself and note it as provisional on the quote — Deal Desk can adjust later"],
        correct: 1,
        explanation: "Non-standard structures must go through Deal Desk before they're presented to a customer. Presenting an unapproved structure — even informally — creates expectations that may not survive internal review and damages your credibility if the structure changes. The process is: Deal Desk first, then customer.",
        resource: { label: "CPQ Demo Video (21m)", url: "https://amplitude.zoom.us/clips/share/J3jESXUBQs2gJpOAHXrSXg" }
      },
      {
        id: 4, type: "tf", lo: "LO2",
        text: "True or False: As long as your deal is strategic and the customer relationship is strong, you have flexibility to approve discounts beyond Amplitude's policy guardrails on your own.",
        options: ["True", "False"],
        correct: 1,
        explanation: "False. No AE has unilateral authority to approve discounts outside of policy guardrails, regardless of deal size or relationship quality. Anything outside policy requires Deal Desk and Finance involvement. Attempting to approve non-standard discounts without this process creates legal, financial, and operational risk.",
        resource: { label: "2026 Sales Policy Handbook (Spekit)", url: "https://app.spekit.co/app/wiki/asset/817909a3-30d8-4b9b-9a35-d8c07150b365?type=asset&expanded=true" }
      },
      {
        id: 5, type: "mc", lo: "LO3",
        text: "A champion says: 'We love Amplitude but this price is going to be a hard sell to our CFO.' A Challenger equips their Mobilizer. What's the most powerful thing you give them?",
        options: ["A discount — reducing the price lowers the barrier the champion has to clear internally and demonstrates Amplitude's flexibility", "A peer reference call with a company at a similar stage — social proof from a trusted peer is more persuasive to a CFO than anything the AE can say", "A quantified business case that connects Amplitude's impact to the CFO's specific metrics — retention improvements, engineering cycles saved, experiment velocity gained — translated into financial terms. A Mobilizer needs a Challenger insight they can take to the EB, not just enthusiasm.", "A product capabilities overview tailored to finance stakeholders — CFOs need to understand what they're buying before they'll approve the spend"],
        correct: 2,
        explanation: "Challengers equip their Mobilizers with Commercial Insights they can use internally — and CFOs evaluate investments, not tools. A quantified business case (Gain: the ROI of action; Pain of Same: the cost of not acting) gives your Mobilizer the Challenger language to take to the EB. They can't sell enthusiasm to a CFO; they can sell 'this will improve retention by X%, which maps to $Y in annual revenue.' A discount arms them with a number to negotiate; a business case arms them with a reason to say yes. One is passive; the other is Challenger.",
        resource: { label: "2026 Sales Finance & PPL Enablement Deck (Spekit)", url: "https://app.spekit.co/app/wiki/asset/101068d2-21c1-4d12-9f66-ab1f7fda4e8b?type=asset&expanded=true" }
      },
      {
        id: 6, type: "mc", lo: "LO1",
        text: "Amplitude's 2026 pricing model is built around SKUs, tiers, and add-ons. When explaining this to a prospect, what's the most important thing to anchor to?",
        options: ["The specific price points for each SKU so customers have clear, transparent cost expectations", "How the pricing structure maps to their use cases and outcomes — not the packaging mechanics. Prospects care about 'what do I get for this investment,' not what tier it sits in.", "A comparison of Amplitude's pricing against competitors so customers can benchmark the value", "The total feature count included in each tier so customers can validate they're getting enough capability"],
        correct: 1,
        explanation: "Pricing conversations that get lost in SKU details quickly lose the prospect's attention. The frame that works is 'based on what you're trying to accomplish, here's what makes sense for you and why' — translating the packaging structure into their language and their use case.",
        resource: { label: "2026 Proposal Template", url: "https://docs.google.com/presentation/d/1jhDGkH9jdm1mYj1b179mAn6pkphmCiStresnsAvKtQs/edit" }
      },
      {
        id: 7, type: "mc", lo: "LO2",
        text: "You're about to send a proposal. What should you validate before hitting send?",
        options: ["That the structure is approved by Deal Desk, the pricing is accurate in CPQ, any non-standard terms have been reviewed, and your champion has seen it so there are no surprises when it reaches the committee.", "That the formatting is clean, the logo and branding are correct, and the proposal looks polished enough to go to an executive audience.", "That you've included enough product tier options to give the customer flexibility, which signals Amplitude is willing to work with their constraints.", "That you've pre-addressed the most likely objections in the proposal itself so the customer has answers before they raise concerns."],
        correct: 0,
        explanation: "A proposal is a commitment — it needs to be right before it lands. Deal Desk approval, CPQ accuracy, legal review (if non-standard terms), and champion alignment are the four gates before a proposal should be sent. Champion alignment is especially critical: your champion should never be surprised by what's in the proposal, because they're the one who has to sell it internally.",
        resource: { label: "2026 Proposal Template", url: "https://docs.google.com/presentation/d/1jhDGkH9jdm1mYj1b179mAn6pkphmCiStresnsAvKtQs/edit" }
      },
      {
        id: 8, type: "fill", lo: "LO2",
        text: "For pricing and quoting help on 2026 PPL at Amplitude, you open a ________ with Deal Desk from the associated opportunity in Salesforce.",
        correct: ["case", "support case", "a case", "a support case"],
        placeholder: "what do you open...",
        explanation: "The correct process for Deal Desk engagement is opening a case directly from the associated opportunity in Salesforce. This ensures the conversation is linked to the right opportunity, tracked properly, and routed to the right Deal Desk rep for your geography.",
        resource: { label: "2026 Sales Finance & PPL Enablement Deck (Spekit)", url: "https://app.spekit.co/app/wiki/asset/101068d2-21c1-4d12-9f66-ab1f7fda4e8b?type=asset&expanded=true" }
      },
      {
        id: 9, type: "mc", lo: "LO3",
        text: "A prospect pushes you to include more products in the deal than they've expressed a clear need for. What's the risk of over-bundling?",
        options: ["Over-bundling inflates price and undermines trust — customers who sign bloated deals and don't use everything become churn risks at renewal, which is your problem too.", "Over-bundling isn't a real risk if the customer is enthusiastic — their internal champion will right-size the contract during negotiation anyway.", "The risk is leaving money on the table — if a customer pushes you to include more, that's a buying signal worth capitalizing on.", "Over-bundling delays the deal — procurement teams scrutinize larger contracts more carefully, which extends the timeline unnecessarily."],
        correct: 0,
        explanation: "Over-bundling is a common mistake that feels like upselling but actually creates friction. A customer who signs a bloated deal and doesn't use half of it becomes a churn risk. A customer who buys what they need, succeeds with it, and expands later is the better outcome — for them and for Amplitude's NRR.",
        resource: { label: "Pricing Scenario Exercise", url: "https://docs.google.com/presentation/d/1U44Rs5ZGuNiORIzteK-W1n0EN3HPDvnXXEHMOLbemUc/edit" }
      },
      {
        id: 10, type: "mc", lo: "LO2",
        text: "What Slack channel should you use when you have urgent pricing or packaging questions and can't get to Deal Desk immediately?",
        options: ["#help-salesops", "#competitive", "#gtm-pricing-packaging-help", "#global-aes"],
        correct: 2,
        explanation: "#gtm-pricing-packaging-help is the designated channel for pricing and packaging questions. It's monitored by the relevant stakeholders and is the fastest path to a real-time answer when you can't open a formal Deal Desk case.",
        resource: { label: "2026 Sales Finance & PPL Enablement Deck (Spekit)", url: "https://app.spekit.co/app/wiki/asset/101068d2-21c1-4d12-9f66-ab1f7fda4e8b?type=asset&expanded=true" }
      }
    ]
  },
  {
    id: "day10", day: "Day 10", title: "Leveraging Partners", week: "Week 3",
    questions: [
      {
        id: 1, type: "mc", lo: "LO2",
        text: "You're working a deal with a Fortune 500 company and your champion says they're planning to use an SI to implement Amplitude if they buy. What should you do with this information?",
        options: ["Engage your PSM now. An SI already in the picture is a signal to bring in the partner team early — they can help with the relationship, co-selling, and the implementation narrative before the SI influences the decision without your visibility.", "Wait until after the deal closes to engage the partner team — involving them during the sale creates commercial complexity and potential confusion over who owns the customer relationship.", "Ask the customer to hold off on selecting an SI until after the contract is signed — SI involvement before closing can complicate negotiations and slow the deal.", "Contact the SI directly yourself to establish a relationship — if they're already talking to the customer, you need to be in that conversation immediately."],
        correct: 0,
        explanation: "An SI in the deal is a partner opportunity, not a complication. Engaging your PSM early means you can co-sell with the SI rather than around them, align on the implementation narrative, and use the SI's existing relationship with the customer as an advantage. Missing this window means the SI could influence the decision without your visibility.",
        resource: { label: "PSP and Implementation Pitch Slides 2026", url: "https://docs.google.com/presentation/d/1JJlncSiWqwnxVLbTuuZrpHIgeje0RkGQobWFqlrM_f4/edit" }
      },
      {
        id: 2, type: "mc", lo: "LO2",
        text: "A prospect mentions they're worried about getting value out of Amplitude quickly because their engineering team is small. A Challenger uses this as a Commercial Insight moment — not a features conversation. What's the right framing?",
        options: ["Reassure them that Amplitude is self-service and most customers with small teams instrument successfully within a few weeks without dedicated support", "Offer a longer free trial so they can validate implementation complexity before committing — reducing perceived risk accelerates decision-making", "Teach them the real cost of the concern they just named: implementation without expertise doesn't just take longer — it creates instrumentation debt that compounds. Then lead to the solution: PS or an SI partner accelerates time-to-value and removes the engineering burden they're worried about.", "Propose starting with a single use case and a smaller initial contract — reducing scope makes the implementation risk feel manageable without requiring additional resources"],
        correct: 2,
        explanation: "This is a Challenger Teach + Deepen the Pain moment. The prospect named a legitimate concern — but they're underestimating the downstream cost of trying to solve it alone. Poor instrumentation is expensive to fix: the data insights they need won't be reliable, which means every product decision built on that data is compromised. Once you've deepened the pain of the status quo, lead to the solution (PS or SI partner) as the path forward. This is A-Gap-B applied to a common objection — and it turns a blocker into a buying signal.",
        resource: { label: "PSP and Implementation Pitch Slides 2026", url: "https://docs.google.com/presentation/d/1JJlncSiWqwnxVLbTuuZrpHIgeje0RkGQobWFqlrM_f4/edit" }
      },
      {
        id: 3, type: "tf", lo: "LO1",
        text: "True or False: Partners at Amplitude are most valuable after a deal closes — their role is primarily post-sale implementation support.",
        options: ["True", "False"],
        correct: 1,
        explanation: "False. Partners create value across the full deal cycle — in discovery (validation, technical expertise), in the sale (co-selling, references, implementation credibility), and post-sale (implementation, success). Thinking of partners as only a post-sale resource means you're leaving pre-sale leverage on the table.",
        resource: { label: "PSP and Implementation Pitch Slides 2026", url: "https://docs.google.com/presentation/d/1JJlncSiWqwnxVLbTuuZrpHIgeje0RkGQobWFqlrM_f4/edit" }
      },
      {
        id: 4, type: "mc", lo: "LO3",
        text: "You close a new logo deal and the customer is going to self-implement. Six months later, your CSM tells you adoption is low and the customer is frustrated. What could you have done differently at the deal stage?",
        options: ["Nothing — implementation outcomes happen post-sale and are outside AE accountability", "You could have assessed implementation risk earlier and recommended services or partner support. Customers who struggle with implementation rarely reach adoption — and low adoption at renewal is directly your problem too.", "You should have offered a longer free trial so they could validate implementation complexity upfront", "The CSM should have flagged this risk at kickoff — post-sale implementation is their accountability"],
        correct: 1,
        explanation: "The connection between deal structure and post-sale success is direct. AEs who factor in implementation risk at the deal stage — and recommend appropriate services or SI support — create healthier customers who renew and expand. The deal isn't over at signature; the question is whether the customer can succeed after it.",
        resource: { label: "PSP and Implementation Pitch Slides 2026", url: "https://docs.google.com/presentation/d/1JJlncSiWqwnxVLbTuuZrpHIgeje0RkGQobWFqlrM_f4/edit" }
      },
      {
        id: 5, type: "mc", lo: "LO1",
        text: "You've just finished learning about Amplitude's partner ecosystem. What's the first action that most directly begins building the partner muscle you'll need in the field?",
        options: ["Send a Slack introduction to your designated PSM — building the relationship before you need it means you can move fast when a partner opportunity surfaces in a deal", "Complete the Zoominfo Handbook review — understanding your prospecting data sources is a prerequisite for identifying accounts where partner co-selling makes sense", "Review the full partner directory and identify which SIs are most active in your territory — account-level partner mapping should happen before any relationship outreach", "Schedule a partner co-selling meeting with your manager within 30 days — a structured first co-sell gives you a framework to apply to future partner opportunities"],
        correct: 0,
        explanation: "Building the partner relationship before you need it is how Challengers use partners effectively. Your PSM is the connective tissue between you and the partner ecosystem — they know which partners are active in your territory, who's worked with accounts like yours, and how to structure a co-sell. A Slack intro when a deal is already in flight is late. An intro now means you're ready.",
        resource: { label: "PSP and Implementation Pitch Slides 2026", url: "https://docs.google.com/presentation/d/1JJlncSiWqwnxVLbTuuZrpHIgeje0RkGQobWFqlrM_f4/edit" }
      },
      {
        id: 6, type: "mc", lo: "LO2",
        text: "A prospect says: 'We want to make sure whoever we choose has a strong partner ecosystem for implementation.' How do you respond?",
        options: ["Share specific SI partners who've implemented Amplitude for similar companies, highlight the certified expertise they bring, and offer to connect them with a partner reference — names and specifics beat a generic claim about ecosystem strength.", "'Amplitude has lots of partners — I can send you a full list of everyone in our ecosystem so you can evaluate which ones might be a fit for your implementation needs.'", "'Our platform is straightforward enough that most customers your size implement without a dedicated SI — partners are more relevant for larger enterprise deployments.'", "'We prefer to do implementations directly through our own PS team rather than through SIs — it gives us better quality control over the customer experience post-sale.'"],
        correct: 0,
        explanation: "Prospects asking about the partner ecosystem want evidence, not assurance. Specific partner names, relevant implementation experience for their vertical, and the offer of a reference call turn a vague claim into a credible proof point. This is also a natural moment to loop in your PSM.",
        resource: { label: "PSP and Implementation Pitch Slides 2026", url: "https://docs.google.com/presentation/d/1JJlncSiWqwnxVLbTuuZrpHIgeje0RkGQobWFqlrM_f4/edit" }
      },
      {
        id: 7, type: "mc", lo: "LO3",
        text: "You're in a deal with a tech partner who has an existing relationship with your prospect. In Challenger terms, how does this partner create the most value for you?",
        options: ["The tech partner can run technical demos and handle product questions, freeing you to focus entirely on the commercial conversation", "The tech partner provides a warm introduction and co-selling credibility that gives Amplitude access to stakeholders you couldn't reach cold — and can serve as a Mobilizer amplifier, validating your Commercial Insight to contacts who trust them over you", "The tech partner can handle competitive objections more credibly than an AE can, because they're seen as neutral and not self-interested in the outcome", "The tech partner manages the post-sale transition, which reduces churn risk and lets you close faster by de-risking the customer's implementation concern upfront"],
        correct: 1,
        explanation: "Partners are Mobilizer amplifiers — they extend your reach into stakeholders you can't access and validate your Commercial Insight with contacts who trust them. In Challenger terms, a tech partner who shares your insight with their customer network is doing distributed Commercial Teaching on your behalf. Their existing trust lowers the credibility barrier for your insight and opens the door to new Mobilizers inside the account. The most valuable thing a partner does isn't handling demos or objections — it's using their relationship capital to get your teaching into rooms you're not invited to.",
        resource: { label: "PSP and Implementation Pitch Slides 2026", url: "https://docs.google.com/presentation/d/1JJlncSiWqwnxVLbTuuZrpHIgeje0RkGQobWFqlrM_f4/edit" }
      },
      {
        id: 8, type: "fill", lo: "LO1",
        text: "The two Slack channels for deal-specific partner support and general partnerships questions are #ptr-deal-support and ________.",
        correct: ["#partnershipsteam", "partnershipsteam"],
        placeholder: "second channel name...",
        explanation: "#ptr-deal-support is for deal-specific partner questions and co-sell support. #partnershipsteam is for broader partner strategy and relationship questions. Knowing which to use keeps you connected to the right people at the right time.",
        resource: { label: "PSP and Implementation Pitch Slides 2026", url: "https://docs.google.com/presentation/d/1JJlncSiWqwnxVLbTuuZrpHIgeje0RkGQobWFqlrM_f4/edit" }
      },
      {
        id: 9, type: "mc", lo: "LO3",
        text: "Your manager asks you to build a joint plan with a partner for a key account. What should that plan include?",
        options: ["Clearly defined roles, shared next steps, and alignment on what success looks like — a joint plan is an operational document that answers who owns what and what happens next.", "A revenue share agreement and a formal co-sell contract — without documented commercial terms, partner commitments are informal and unreliable.", "A joint executive presentation to the customer — the most effective way to align is to show up together and demonstrate the partnership in front of the buyer.", "A list of competitive scenarios the partner should handle and escalation paths for when the deal gets complex or moves outside standard territory."],
        correct: 0,
        explanation: "A joint partner plan is an operational document. It answers: who owns the customer relationship, who leads discovery vs. implementation conversations, what the agreed next steps are, and what a successful outcome looks like. Clarity on roles prevents duplication, confusion, and missed moments.",
        resource: { label: "PSP and Implementation Pitch Slides 2026", url: "https://docs.google.com/presentation/d/1JJlncSiWqwnxVLbTuuZrpHIgeje0RkGQobWFqlrM_f4/edit" }
      },
      {
        id: 10, type: "mc", lo: "LO1",
        text: "Which of the following best describes Amplitude's partner types?",
        options: ["SIs who help implement, tech partners who integrate with Amplitude's platform, and agencies who work with customers on strategy and execution — each plays a different role in the deal and customer lifecycle.", "Resellers who sell Amplitude on Amplitude's behalf, referral partners who generate introductions, and white-label providers who bundle Amplitude into their own offerings.", "Global consulting firms like Accenture and Deloitte, regional boutique SIs, and independent contractors who support implementation on a project basis.", "Technology alliance partners like AWS and Snowflake, who provide the infrastructure layer that Amplitude runs on and integrates with."],
        correct: 0,
        explanation: "Amplitude's partner ecosystem includes SIs (implementation and integration expertise), tech partners (platform integrations that extend Amplitude's value), and agencies (strategic and execution partners for customers). Knowing the types helps you identify which kind of partner is most relevant for a given deal situation.",
        resource: { label: "PSP and Implementation Pitch Slides 2026", url: "https://docs.google.com/presentation/d/1JJlncSiWqwnxVLbTuuZrpHIgeje0RkGQobWFqlrM_f4/edit" }
      }
    ]
  }
];