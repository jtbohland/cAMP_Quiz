import type { Quiz } from "../quiz-types.js";

export const week4Quizzes: Quiz[] = [
  {
    id: "day11", day: "Day 11", title: "Forecasting (including Services)", week: "Week 4",
    questions: [
      {
        id: 1, type: "mc", lo: "LO1",
        text: "A deal is in your Commit forecast. Your champion just told you legal review will take 4 weeks, and you have 3 weeks left. Challenger forecasting requires verifiers, not optimism. What do you do?",
        options: ["Keep it in Commit — champions are often pessimistic about internal timelines, and legal reviews typically move faster when both sides are motivated to close", "Move it to Upside immediately and update the close date. A known blocker that makes the close date impossible is not a Commit — it's a hypothesis without a verifier. Updating Salesforce and communicating proactively is Taking Control of your forecast, not admitting defeat.", "Push the close date out a week and keep it in Commit — one week of buffer is standard practice for legal delays and doesn't materially change the quarter's picture", "Escalate to your manager and let them decide whether the deal stays in Commit — forecast call decisions on deals with active blockers should involve senior judgment"],
        correct: 1,
        explanation: "Challenger forecasting is built on verifiers — binary, tangible evidence of customer progress — not on enthusiasm or optimism. A 4-week legal review with 3 weeks remaining is a known blocker: it either resolves or it doesn't, and right now it doesn't. Keeping it in Commit is happy ears — hearing what you want to hear and reporting it as fact. Taking Control means updating Salesforce to reflect reality, communicating the change proactively, and using a powerful request with your champion to explore legal acceleration options. The forecast is only useful if it's honest.",
        resource: { label: "Forecasting Slides", url: "https://docs.google.com/presentation/d/19-B_1a-oBmuMoI_4lc1L5W1oiZZN6pXALYMZObBc9L8/edit" }
      },
      {
        id: 2, type: "mc", lo: "LO3",
        text: "Your manager asks: 'Why is this deal in Commit?' A Challenger forecaster answers with verifiers, not feelings. What's the right answer?",
        options: ["'Because the champion is highly motivated and has been responsive throughout the process — their engagement level signals they're ready to move forward'", "'Because I have concrete verifiers: signed order form, EB-approved budget, Legal completed review, and my champion confirmed internal alignment last week. Here are the specifics.'", "'Because it's been in the pipeline for four months and the customer said they're planning to decide this quarter'", "'Because it's my largest deal this quarter and I'm confident in the relationship we've built over the past three months'"],
        correct: 1,
        explanation: "In Challenger forecasting, Commit requires verifiers — customer-driven, binary, tangible evidence of forward progress. 'The champion is motivated' is not a verifier. 'They said they're deciding this quarter' is not a verifier. Signed paper, approved budget, completed legal review, and confirmed internal alignment are verifiers — they either happened or they didn't, and there's evidence either way. Taking Control of your forecast means only calling Commit when you can name the specific verifiers that back it up. Everything else belongs in Upside or Best Case.",
        resource: { label: "Forecasting Slides", url: "https://docs.google.com/presentation/d/19-B_1a-oBmuMoI_4lc1L5W1oiZZN6pXALYMZObBc9L8/edit" }
      },
      {
        id: 3, type: "mc", lo: "LO2",
        text: "A deal includes $80K in Professional Services. How should this appear in your forecast?",
        options: ["Don't include it separately — services revenue rolls into the total deal value for forecasting", "Include it as a distinct line item in the deal structure, reflected appropriately in your forecast. Services have separate mechanics, margin profiles, and approval paths — they can't be merged with software ARR.", "Roll the services amount into software ARR for simplicity — Deal Desk will separate it during approval", "Only include services in the forecast once the statement of work has been formally scoped and signed"],
        correct: 1,
        explanation: "Professional Services must be included in deal structure and forecasts as a distinct component — not merged with software ARR and not omitted. Services have different forecasting mechanics, margin profiles, and approval paths. Accurate services forecasting is part of good deal hygiene.",
        resource: { label: "Forecasting: Services Slides", url: "https://docs.google.com/presentation/d/1oWMrNqmsc4f0r4vtYmhYZCnppL1cwdIbskQcs_0COQo/edit" }
      },
      {
        id: 4, type: "tf", lo: "LO3",
        text: "True or False: 'Happy ears' forecasting — calling a deal Commit because the prospect seems enthusiastic — is a harmless habit that only affects your own quota.",
        options: ["True", "False"],
        correct: 1,
        explanation: "False. Happy ears forecasting affects leadership planning, resource allocation, hiring decisions, and the entire GTM team's predictability. When individuals consistently over-forecast, leadership loses trust in the number, and the entire forecasting system loses utility. Accurate forecasting is a professional responsibility, not just a personal one.",
        resource: { label: "Forecasting Slides", url: "https://docs.google.com/presentation/d/19-B_1a-oBmuMoI_4lc1L5W1oiZZN6pXALYMZObBc9L8/edit" }
      },
      {
        id: 5, type: "mc", lo: "LO1",
        text: "What's the difference between Commit, Upside, and Best Case in Amplitude's forecast categories?",
        options: ["Commit = deals with concrete verifiers and no known blockers. Upside = real momentum but meaningful risk remaining. Best Case = could close but faces significant uncertainty. Each requires different evidence to justify the call.", "They reflect the same confidence level but serve different audiences — Commit is for your manager, Upside is for your skip-level, and Best Case is for your own internal tracking.", "They're time-based buckets — Commit is expected to close this month, Upside next month, and Best Case within the quarter. Close dates drive which category a deal belongs in.", "They reflect deal type — Commit is for new business, Upside is for expansion plays, and Best Case is for renewals where the outcome is less predictable than a new logo."],
        correct: 0,
        explanation: "Commit, Upside, and Best Case represent different levels of confidence — and each requires a different level of verifier evidence. Commit demands near-certainty with concrete proof. Upside has real momentum but remaining risk. Best Case is aspirational with meaningful uncertainty. Knowing which bucket your deals belong in requires honest assessment of where you actually are.",
        resource: { label: "Forecasting Slides", url: "https://docs.google.com/presentation/d/19-B_1a-oBmuMoI_4lc1L5W1oiZZN6pXALYMZObBc9L8/edit" }
      },
      {
        id: 6, type: "mc", lo: "LO3",
        text: "You have five deals closing this quarter. Two are Commit with strong verifiers. Two are Upside with some risk. One is Best Case with significant uncertainty. How do you communicate this portfolio to your manager?",
        options: ["Be transparent about the mix — name verifiers for Commits, identify specific risks on Upside deals and what you're doing about them, and be honest about Best Case uncertainty. Your manager can only help when they have the real picture.", "Present your Commits with full confidence and acknowledge Upside and Best Case exist, but avoid over-qualifying them — too much hedging makes you look like you don't believe in your own pipeline.", "Let the numbers speak — share your total pipeline amount and coverage ratio. If it's strong, the mix matters less than whether you have enough to hit quota.", "Only discuss Commit deals in formal forecast reviews — Upside and Best Case are for your own planning and shouldn't be surfaced until they're closer to closing."],
        correct: 0,
        explanation: "Transparent, differentiated forecast communication is how you build trust with your manager and get useful help. A manager who knows the real picture can coach you on risk mitigation, escalate resources, or adjust expectations with leadership. A manager who only hears 'everything looks good' can't help you.",
        resource: { label: "Forecasting Slides", url: "https://docs.google.com/presentation/d/19-B_1a-oBmuMoI_4lc1L5W1oiZZN6pXALYMZObBc9L8/edit" }
      },
      {
        id: 7, type: "mc", lo: "LO2",
        text: "To access the Outreach CQ New Business and CQ Renewal opportunity views, you navigate to Opportunities, open the smartview dropdown, and select what?",
        options: ["Filters", "My Views", "Categories", "Templates"],
        correct: 2,
        explanation: "To access the CQ opportunity views in Outreach: Opportunities → smartview dropdown → Categories → then select New Business or Renewals. This is the navigation path for the pipeline views you'll use throughout the quarter.",
        resource: { label: "Forecasting Slides", url: "https://docs.google.com/presentation/d/19-B_1a-oBmuMoI_4lc1L5W1oiZZN6pXALYMZObBc9L8/edit" }
      },
      {
        id: 8, type: "mc", lo: "LO1",
        text: "What's the single most important thing that separates a 'defensible' Commit forecast from a 'happy ears' forecast?",
        options: ["Manager approval — a forecast call that has been reviewed and signed off by your manager is defensible by definition", "Deal size — larger deals warrant more scrutiny, but smaller deals in Commit can rely on relationship signals as sufficient evidence", "Concrete buyer verifiers — specific, binary, tangible customer actions that confirm the deal is ready to close. A defensible forecast can be interrogated and withstands scrutiny. Happy ears can't — it collapses under the first follow-up question.", "Close date accuracy — a Commit deal with a realistic close date that reflects the actual paper process timeline is more defensible than one with an optimistic date"],
        correct: 2,
        explanation: "Challenger forecasting is Taking Control applied to your pipeline. The difference between defensible and happy ears is the same as the difference between a real verifier and a vague customer statement: one is binary and tangible, the other isn't. 'They seemed really excited' is happy ears. 'They sent the legal redlines, their CFO approved the budget line, and their champion confirmed the board sign-off happened last Thursday' is a defensible Commit. If you can't name the verifiers that justify the call, it's not a Commit.",
        resource: { label: "Forecasting Slides", url: "https://docs.google.com/presentation/d/19-B_1a-oBmuMoI_4lc1L5W1oiZZN6pXALYMZObBc9L8/edit" }
      },
      {
        id: 9, type: "mc", lo: "LO3",
        text: "It's week 3 of a 13-week quarter and your pipeline is at 2x coverage. Should you be comfortable with this?",
        options: ["Yes — 2x is above 1x, which means you technically have more pipeline than quota", "No — 2x is well below the 3–4x target. Week 3 is exactly when you should be building aggressively, because pipeline created now has the full quarter to mature. Late-built pipeline rarely closes in time.", "It depends on whether your Commit deals are strong — strong Commits can offset low coverage", "Yes — as long as you have at least one strong Commit, coverage ratio is less important early in the quarter"],
        correct: 1,
        explanation: "2x coverage in week 3 is a pipeline emergency. The standard target is 3–4x, and the best time to build it is early in the quarter when deals have time to progress. Week 3 with 2x coverage means you need to be prospecting aggressively now — not managing what you already have.",
        resource: { label: "GTM Launch Pad Dashboard", url: "https://amplitude.lightning.force.com/analytics/dashboard/0FKUw0000000gLpOAI" }
      },
      {
        id: 10, type: "mc", lo: "LO2",
        text: "When you update a deal's close date or stage in Salesforce, what's the expectation around documentation?",
        options: ["No documentation needed — the field update itself is the record of the change", "Document your reasoning. A stage change or close date push without a note explaining why leaves a gap your manager and leadership can't interpret. 'Pushed — legal review longer than expected, champion still engaged' is useful. Blank isn't.", "Only document changes when you're moving a deal backward — forward movement doesn't need justification", "Document only when your manager specifically requests it during forecast review or pipeline inspection"],
        correct: 1,
        explanation: "Every stage or close date change should have a documented reason — even if brief. This creates an accurate deal history, helps your manager understand the deal's health trajectory, and ensures no one is guessing about what changed and why. Clean deal records are a professional standard.",
        resource: { label: "Forecasting Slides", url: "https://docs.google.com/presentation/d/19-B_1a-oBmuMoI_4lc1L5W1oiZZN6pXALYMZObBc9L8/edit" }
      }
    ]
  },
  {
    id: "day12", day: "Day 12", title: "Customer Stories", week: "Week 4",
    questions: [
      {
        id: 1, type: "mc", lo: "LO2",
        text: "You're in discovery and want to introduce a customer story to build credibility. In Challenger terms, what's the wrong way to do it?",
        options: ["'A company similar to you had this exact problem — can I share how they approached it and what changed?'", "'We work with Nike, Spotify, and hundreds of other great companies.' Then move on to your next question.", "'Before I ask you about your current state, let me share what a Head of Growth at a company just like yours discovered — it reframes the problem in a way I think will be useful.'", "'Here's what a fintech at your stage learned when they dug into their activation data — the insight surprised them and it's relevant to what you just described.'"],
        correct: 1,
        explanation: "Challenger storytelling is a Teaching tool — it reframes the customer's understanding of their problem, not just signals that you have customers. Logo-dropping without insight ('We work with Nike and Spotify') is leading WITH social proof instead of leading TO a Commercial Insight. It tells the customer you're successful, but it doesn't teach them anything new or create Constructive Tension around the problem you're there to solve. Options A, C, and D all use the story to advance discovery or deepen understanding — that's the Challenger use of a customer story.",
        resource: { label: "Power to Your Stories Recording", url: "https://amplitude.zoom.us/clips/share/yIjOHrqMQAill7OX5MJ-9g" }
      },
      {
        id: 2, type: "mc", lo: "LO2",
        text: "You're about to share a customer story with a Head of Data. You have two stories ready: one about a VP of Product at a similar company, and one about a Head of Data at a different industry. Which do you use?",
        options: ["Use the Head of Data story — the goal is 'people like me.' Role match creates the strongest identification. A data leader connects more with a peer in their function than with a different persona in the same industry.", "Use the VP of Product story — the more senior the reference, the more credibility it carries with a Head of Data who is trying to get executive buy-in internally.", "Use both stories back to back — giving the Head of Data two proof points doubles the persuasive impact and covers more of their potential objections.", "Use whichever story has the most impressive outcome metrics — a Head of Data will respond to data regardless of the persona, because that's how they think."],
        correct: 0,
        explanation: "The most powerful customer story for any persona is one that makes them say 'that's me.' Role match matters more than industry match. A Head of Data at a media company will connect more with a Head of Data at a healthcare company than with a VP of Product at a media company.",
        resource: { label: "Power to Your Stories Recording", url: "https://amplitude.zoom.us/clips/share/yIjOHrqMQAill7OX5MJ-9g" }
      },
      {
        id: 3, type: "mc", lo: "LO3",
        text: "A prospect's CFO is nervous about the business case. You want to use a customer story to Teach through the A-Gap-B structure. What structure makes a story a Commercial Insight — not just a reference?",
        options: ["Lead with outcome first — CFOs respond to numbers, so anchor on the ROI before explaining the journey that produced it", "Context, challenge, action, outcome — walk them through what happened at a similar company. The specificity is what makes executives believe it could apply to them.", "Reframe first: open with an unexpected insight about what companies like theirs are underestimating, deepen the cost of that gap, then reveal Amplitude as the path forward. The story is the proof point that makes the reframe credible — not the opening move.", "Tailor the structure to this specific CFO's communication style — some want narrative arc, others want data-first, and reading the room is more important than following a framework"],
        correct: 2,
        explanation: "A Challenger story isn't a case study — it's a Commercial Insight delivered through narrative. The A-Gap-B structure: A = what companies like theirs are doing today (and believing is sufficient), Gap = the cost of that belief (what they're underestimating or missing), B = what changed when they addressed it (and how Amplitude was part of that). This structure makes the CFO think differently before they see the proof — which is leading TO your solution, not WITH it. Option B is solid storytelling but it's descriptive, not disruptive. Option A front-loads the outcome but skips the reframe that makes the outcome meaningful.",
        resource: { label: "Power to Your Stories Recording", url: "https://amplitude.zoom.us/clips/share/yIjOHrqMQAill7OX5MJ-9g" }
      },
      {
        id: 4, type: "mc", lo: "LO1",
        text: "True or False: A customer story used early in discovery — before you've shown any product — can be a more effective Challenger Teaching tool than one saved for the proposal stage.",
        options: ["True", "False"],
        correct: 0,
        explanation: "True. Challenger Teaching leads TO the solution — which means the story often lands hardest before the product is in the room. A well-placed Commercial Insight story early in discovery does two things: it reframes how the prospect thinks about their problem (Teach), and it creates Constructive Tension that makes them want to understand how Amplitude solved it (tension that leads to your solution naturally). Saving stories for the proposal stage is a traditional sales instinct — leading with social proof after you've already pitched. Challengers use stories to open the commercial conversation, not close it.",
        resource: { label: "Power to Your Stories Recording", url: "https://amplitude.zoom.us/clips/share/yIjOHrqMQAill7OX5MJ-9g" }
      },
      {
        id: 5, type: "tf", lo: "LO3",
        text: "True or False: A customer story is most effective when told in a formal presentation setting — it should be saved for demo calls and proposal reviews, not early discovery conversations.",
        options: ["True", "False"],
        correct: 1,
        explanation: "False. The most effective use of customer stories is often in early discovery — before you've even shown the product. A well-placed story in discovery teaches the prospect something about their problem, creates a frame for the conversation, and builds rapport. Stories are a tool for every stage, not just later ones.",
        resource: { label: "Power to Your Stories Recording", url: "https://amplitude.zoom.us/clips/share/yIjOHrqMQAill7OX5MJ-9g" }
      },
      {
        id: 6, type: "mc", lo: "LO2",
        text: "The Amplitude PODcast is described as 'a playbook in disguise.' What does that mean for how a Challenger uses it?",
        options: ["It's an archive of wins that provides competitive context — useful for understanding what deal patterns lead to success against specific competitors", "Each episode surfaces the specific Challenger moves that made a win happen — the Commercial Insights that landed, how Constructive Tension was managed, which Mobilizers were activated, and what Taking Control looked like in a real deal. You extract the pattern and apply it to your own territory.", "It's a culture-building tool that reinforces cross-functional collaboration — hearing how PODs work together builds the trust that makes Challenger selling a team sport", "It's most useful for managers coaching their teams — the deal breakdowns give managers concrete examples to reference in 1:1s and pipeline reviews"],
        correct: 1,
        explanation: "A Challenger uses the PODcast the same way they use every resource — to extract insight they can apply. Each episode is a Commercial Insight case study: what did the team Teach the customer that reframed the problem? Where did they build Constructive Tension and how did they recover when it went too far? Who was the Mobilizer and how was their commitment and influence confirmed? Which verifiers moved the deal forward? The PODcast isn't inspiration — it's a pattern library. Challengers watch to steal moves, not to feel good about wins.",
        resource: { label: "PODcast: FOX Corp (NAMER)", url: "https://amplitude.zoom.us/clips/share/eWjq8c5RQXGYvdWqXUeDWg" }
      },
      {
        id: 7, type: "mc", lo: "LO3",
        text: "A new stakeholder inherited the Amplitude contract and wants to 're-evaluate.' In Challenger terms, the most powerful story you can tell them is one they already own. What does that mean in practice?",
        options: ["Share a third-party story from a company at their stage — an external reference is more credible to a new stakeholder than internal history they didn't live", "Let your CSM tell the story — they have the relationship history and product knowledge to present it more credibly than an AE who's re-entering the account", "Tell the story of their own company's Amplitude journey — the problem that led to the original purchase, what was learned, and what the data already shows. A new stakeholder needs to understand what they'd be walking away from, not just what Amplitude is.", "Focus entirely on future value — a new stakeholder's agenda is forward-looking, so historical context about why the platform was purchased is less relevant than what it will help them accomplish"],
        correct: 2,
        explanation: "The Challenger Teach principle applied to a renewal re-evaluation: the most powerful insight you can give a new stakeholder is a Commercial Insight built around their own account. They inherited a decision — your job is to help them understand what that decision was solving, what would be lost by reversing it (Pain of Same), and why the original purchase is the foundation for what they're trying to accomplish in their new role. This isn't about selling Amplitude again — it's about teaching them the story of their own business, which is the most Tailored Commercial Insight you can possibly deliver.",
        resource: { label: "Spekit: Customer Stories", url: "https://app.spekit.co/app/wiki/?&topic=d07076bf-9871-42fb-9d91-63b9e3166385&tag=Customer%20Stories" }
      },
      {
        id: 8, type: "fill", lo: "LO1",
        text: "The Slack channel for sharing win reports, competitive wins, and real deal stories at Amplitude is ________.",
        correct: ["#win-reports", "win-reports"],
        placeholder: "channel name...",
        explanation: "#win-reports is where Amplitude sellers share win stories, competitive displacement details, and deal breakdowns. It's a living library of social proof and reusable patterns — reading it regularly is part of staying sharp on what's working in the field.",
        resource: { label: "Power to Your Stories Recording", url: "https://amplitude.zoom.us/clips/share/yIjOHrqMQAill7OX5MJ-9g" }
      },
      {
        id: 9, type: "mc", lo: "LO3",
        text: "You're preparing for a presentation to a 5-person buying committee: VP of Product, Head of Data, CFO, CTO, and Head of Marketing. You have one customer story to share. How do you tailor it?",
        options: ["Lead with the outcome most relevant to the economic buyer, then layer in specific elements for each persona — the data precision angle for the Head of Data, the growth angle for the VP of Product, the ROI angle for the CFO. One story, multiple lenses.", "Pick the story with the most impressive metrics and tell it the same way to everyone — consistency prevents confusion in a group setting where stakeholders compare notes afterward.", "Tell separate stories to each stakeholder and weave them together in your summary — a tailored story for each person is more persuasive than a single story stretched across roles.", "Lead with the story that matches the most skeptical person in the room — if you win them over, everyone else follows. The CFO or CTO is usually that person."],
        correct: 0,
        explanation: "A single story can be tailored to a diverse committee by emphasizing different elements of the same narrative for different stakeholders. The core story stays consistent — but the framing shifts depending on who you're speaking to at each moment. This is the 'Tailor' in Teach-Tailor-Take Control.",
        resource: { label: "Power to Your Stories Recording", url: "https://amplitude.zoom.us/clips/share/yIjOHrqMQAill7OX5MJ-9g" }
      },
      {
        id: 10, type: "mc", lo: "LO2",
        text: "A prospect asks: 'Do you have any customers in the insurance industry?' You don't have a direct match. What do you do?",
        options: ["Say you don't have an insurance reference and offer to find one before the next meeting", "Acknowledge the gap, then bridge with an adjacent industry story where the core pain is the same. A fintech worried about user retention is a closer match than an insurance company with no analytics challenge.", "Tell them you'll have a reference by next week and follow up only if they ask again", "Suggest they speak with other Amplitude prospects in their space through a reference program"],
        correct: 1,
        explanation: "A direct vertical match isn't always available — and that's okay. Adjacent industry stories work when the underlying pain is the same. An insurance company worried about customer retention shares more with a fintech worried about retention than it does with an insurance company that has no analytics challenge. Bridge the gap with shared pain, not shared logos.",
        resource: { label: "Spekit: Customer Stories", url: "https://app.spekit.co/app/wiki/?&topic=d07076bf-9871-42fb-9d91-63b9e3166385&tag=Customer%20Stories" }
      }
    ]
  },
  {
    id: "day13", day: "Day 13", title: "Contract Lifecycle Management", week: "Week 4",
    questions: [
      {
        id: 1, type: "mc", lo: "LO2",
        text: "You're about to submit your deal to Legal. What should you have prepared before you engage them?",
        options: ["Your champion's name, the deal amount, and a brief summary of what the customer wants", "Clean, complete inputs: a configured order form, non-standard terms flagged, approvals documented, and your champion confirmed on the commercial structure. Legal moves as fast as the quality of what you give them.", "A draft based on the closest previous deal you've done — Legal can adapt it from there", "Legal will send you a checklist of what they need — wait for their request before preparing anything"],
        correct: 1,
        explanation: "Legal efficiency starts with AE preparation. The cleaner and more complete your inputs — order form, flagged non-standard terms, deal approvals, commercial alignment — the faster Legal can move. AEs who regularly submit incomplete packages extend their own deal cycles.",
        resource: { label: "CLM Session Slides", url: "https://docs.google.com/presentation/d/1qlfiR7FE_tkMei8SNNktEAxv0YLausl_gBXxrEvTm54/edit" }
      },
      {
        id: 2, type: "mc", lo: "LO2",
        text: "Your deal has a close date of end of month. It's currently the 15th and you haven't engaged Legal yet. The customer wants non-standard payment terms. What's your risk?",
        options: ["High risk. Non-standard terms require Legal review that takes time — especially early engagement isn't happening. With 15 days left and non-standard payment terms unreviewed, you need Legal and Deal Desk today.", "Manageable risk — non-standard payment terms are common and Legal can typically turn them around in 48–72 hours if you escalate priority.", "Low risk if the deal is otherwise clean — non-standard payment terms are a commercial issue, not a legal one, and Deal Desk can approve them without a full Legal review.", "High risk, but the right move is to get the customer to accept standard terms rather than starting a Legal review this late. Changing their ask is faster than reviewing it."],
        correct: 0,
        explanation: "Non-standard terms are a red flag that should trigger early Legal engagement — not a last-week scramble. Payment terms, liability clauses, custom SLAs, and any deviation from standard MSA language all require Legal review time. Missing this window is one of the most common causes of quarter-end slippage.",
        resource: { label: "CLM Session Slides", url: "https://docs.google.com/presentation/d/1qlfiR7FE_tkMei8SNNktEAxv0YLausl_gBXxrEvTm54/edit" }
      },
      {
        id: 3, type: "mc", lo: "LO3",
        text: "A prospect's legal team sends back a redlined contract with 20+ changes. What's your role?",
        options: ["Forward the redlines to Legal immediately and manage the customer's timeline expectations. AEs don't negotiate contract language — Legal does. Flag anything with commercial implications to Deal Desk.", "Work through the redlines with your champion to identify which ones are negotiable before involving Legal — it saves time and reduces back-and-forth between the teams.", "Accept redlines that look standard to keep momentum and escalate only the ones that seem unusual — Legal doesn't need to see every change, just the substantive ones.", "Schedule a call between your Legal team and the customer's Legal team directly — removing yourself from the negotiation speeds it up and avoids miscommunication."],
        correct: 0,
        explanation: "AEs don't negotiate contract redlines — Legal does. Your job when redlines arrive is to route them to Legal quickly, set realistic timeline expectations with the customer, and flag any terms that have commercial implications (payment terms, liability caps, pricing locks) to Deal Desk. Getting in the middle of legal negotiations you're not qualified to run creates more problems than it solves.",
        resource: { label: "CLM Session Slides", url: "https://docs.google.com/presentation/d/1qlfiR7FE_tkMei8SNNktEAxv0YLausl_gBXxrEvTm54/edit" }
      },
      {
        id: 4, type: "tf", lo: "LO2",
        text: "True or False: Engaging Legal early in the deal cycle — even before the customer has formally committed to buy — is acceptable practice at Amplitude.",
        options: ["True", "False"],
        correct: 0,
        explanation: "True. Early Legal engagement on complex deals is a best practice. For enterprise deals with anticipated non-standard terms, getting Legal familiar with the deal early — sharing the expected structure and flagging potential issues — reduces the sprint at the end of the quarter and makes the close smoother.",
        resource: { label: "CLM Session Slides", url: "https://docs.google.com/presentation/d/1qlfiR7FE_tkMei8SNNktEAxv0YLausl_gBXxrEvTm54/edit" }
      },
      {
        id: 5, type: "mc", lo: "LO3",
        text: "Your champion calls you and says: 'Our procurement team just got involved and they want to use their own paper (their contract template instead of Amplitude's).' What do you do?",
        options: ["Agree to use their paper to keep the relationship moving — flexibility signals partnership", "Flag it to Legal immediately. Customer paper significantly changes the review scope and timeline — often adding weeks, not days. Adjust your close date to reflect the real timeline and keep your champion informed.", "Tell the champion you can't use their paper under any circumstances — Amplitude only uses its own MSA", "Review the customer's paper yourself and accept any clauses that seem standard before escalating the rest"],
        correct: 1,
        explanation: "Customer paper is a significant contract event. It means Legal starts over with a document they didn't write, filled with terms that may be unfamiliar or unfavorable. The timeline impact can be substantial — weeks, not days. Flag it to Legal immediately and recalibrate your close date to reflect the real review timeline.",
        resource: { label: "Legal 201 (MindTickle)", url: "https://lms.amplitude.com/new/ui/learner/training/programs/1811138233611482941?series=1811138233611482941" }
      },
      {
        id: 6, type: "mc", lo: "LO1",
        text: "A deal is in late stage and your champion says: 'We're ready to sign — what do you need from us?' What two systems do you need to make sure are aligned before you can actually close this deal?",
        options: ["CLM (Contract Lifecycle Management) and Salesforce — the contract needs to be properly structured in CLM and the opportunity needs to reflect the correct stage, amount, and close date in Salesforce", "Outreach and Salesforce — outreach sequences need to be paused and the opportunity updated so the customer stops receiving prospecting touches after they've agreed to buy", "Spekit and Salesforce — the deal terms need to be documented in Spekit for the CS team's reference and the opportunity updated in Salesforce to reflect closed-won", "DocuSign and Salesforce — once the contract is sent for signature in DocuSign, Salesforce updates automatically and no further action is needed on the AE's side"],
        correct: 0,
        explanation: "CLM and Salesforce are the two systems central to closing a deal at Amplitude. CLM is where the contract lives — it needs clean inputs, proper review, and correct structure before signature. Salesforce is where the opportunity lives — stage, amount, close date, and all associated data need to accurately reflect the deal's state. Both systems need to be right. A deal where CLM is clean but Salesforce is a mess creates downstream problems for CS, finance, and reporting.",
        resource: { label: "CLM Session Slides", url: "https://docs.google.com/presentation/d/1qlfiR7FE_tkMei8SNNktEAxv0YLausl_gBXxrEvTm54/edit" }
      },
      {
        id: 7, type: "mc", lo: "LO3",
        text: "End of quarter, 3 days to close. Legal says they need 5 more days to complete review. What are your options?",
        options: ["Work with your champion to explore acceleration options: can legal expedite their review? Is there a bridge agreement? Can Deal Desk and Legal parallel-path the work? Then be honest with your manager about the likely outcome.", "Tell Legal the deal needs to close in 3 days and ask them to prioritize it — escalation from the AE is usually enough to compress the review timeline when the deal is real.", "Ask your champion to sign a letter of intent now and complete the full contract review after quarter close — LOIs are legally sufficient to recognize revenue in most cases.", "Push the close date to next quarter and reset expectations — trying to compress a 5-day review into 3 days creates errors that cost more time to fix than the delay itself."],
        correct: 0,
        explanation: "When Legal needs more time than you have, your job is to explore every legitimate acceleration option while being honest with your manager about the real state of the deal. 'We can work the problem together' is always the right frame — not hiding the issue until it surfaces on the last day.",
        resource: { label: "CLM Session Slides", url: "https://docs.google.com/presentation/d/1qlfiR7FE_tkMei8SNNktEAxv0YLausl_gBXxrEvTm54/edit" }
      },
      {
        id: 8, type: "fill", lo: "LO1",
        text: "The Slack channel you go to for Legal questions, contract support, and CLM-related escalations at Amplitude is ________.",
        correct: ["#help-legal", "help-legal"],
        placeholder: "channel name...",
        explanation: "#help-legal is the designated channel for Legal questions and contract support. It connects you to the Legal and Legal Ops team without needing to know a specific person's name or email.",
        resource: { label: "CLM Session Slides", url: "https://docs.google.com/presentation/d/1qlfiR7FE_tkMei8SNNktEAxv0YLausl_gBXxrEvTm54/edit" }
      },
      {
        id: 9, type: "mc", lo: "LO2",
        text: "What's the single habit that most separates AEs who close cleanly from those who scramble at quarter end?",
        options: ["Building a strong enough champion that internal approvals move faster — a highly motivated Mobilizer can compress timelines that AEs can't control directly", "Engaging Legal early — the moment non-standard terms appear on the table, not when the customer is ready to sign. Taking Control of the contract process means running it in parallel with the deal, not after it.", "Getting the customer onto Amplitude's standard MSA from day one — removing variability from the contract eliminates the review bottleneck entirely", "Scoping deals to avoid complexity — simpler deals close faster and with less friction, which compounds into more closed business over a full quarter"],
        correct: 1,
        explanation: "Taking Control applies to the contract process the same way it applies to the buying process. AEs who close cleanly are proactive — they identify non-standard terms early, engage Legal while there's still time to resolve issues, and treat the paper process as a Challenger verifier sequence with defined milestones. AEs who scramble let the process run without them and then react to Legal's timeline at the worst possible moment. The habit isn't about Legal at all — it's about taking control early enough that surprises become solvable.",
        resource: { label: "CLM Session Slides", url: "https://docs.google.com/presentation/d/1qlfiR7FE_tkMei8SNNktEAxv0YLausl_gBXxrEvTm54/edit" }
      },
      {
        id: 10, type: "mc", lo: "LO3",
        text: "You've just closed a complex deal. Reflecting on the contract process, what's the single habit that would have made the process smoother?",
        options: ["Engaging Legal earlier — the moment non-standard terms were on the table, not when the customer was ready to sign. Early engagement means earlier resolution and a close date that's actually achievable.", "Building a stronger internal champion who could have accelerated Legal review and procurement approvals through their own internal relationships.", "Getting the customer to use Amplitude's standard terms from day one — removing the variability of customer paper eliminates the Legal review bottleneck entirely.", "Scoping the deal to avoid non-standard terms in the first place — simpler deals with standard structure close faster and with less friction across every team."],
        correct: 0,
        explanation: "The most universal lesson from CLM is that late Legal engagement creates late-deal risk. The habit of flagging Legal-relevant signals early — non-standard terms, customer paper, unusual payment structures, IP requirements — and initiating Legal review before the final stretch is what separates smooth closes from scrambles.",
        resource: { label: "CLM Session Slides", url: "https://docs.google.com/presentation/d/1qlfiR7FE_tkMei8SNNktEAxv0YLausl_gBXxrEvTm54/edit" }
      }
    ]
  },
  {
    id: "day14", day: "Day 14", title: "Deal Desk & CPQ", week: "Week 4",
    questions: [
      {
        id: 1, type: "mc", lo: "LO1",
        text: "When should you engage Deal Desk on a deal? A Challenger Takes Control of the commercial process — not just the customer conversation. What does that mean here?",
        options: ["At Stage 4, when the customer has verbally committed — Deal Desk needs a real opportunity to work with, not a hypothetical one", "Early — as soon as you identify non-standard structure, custom pricing, or approval requirements. Taking Control means running the internal process in parallel with the deal, so approvals are ready when the customer is. Last-minute Deal Desk engagement is just as much a loss of control as a stalled deal.", "Only for deals above your discount authority — routine deals don't need Deal Desk involvement and adding them to the process adds friction without value", "When the customer raises a pricing objection — Deal Desk's role is to help you respond to commercial challenges, not to pre-approve structures in advance"],
        correct: 1,
        explanation: "Taking Control means proactively managing every process that affects your deal timeline — including the internal approval process. AEs who engage Deal Desk early can shape the structure, get approvals in advance, and show up to the customer with a ready answer. AEs who engage late create the internal equivalent of a stalled deal: they've lost control of their own close date. A powerful request from you to Deal Desk, with the right context and timeline, is the same move as a powerful request to a champion — it drives forward motion in a process that could otherwise stall.",
        resource: { label: "Deal Desk Session Slides", url: "https://docs.google.com/presentation/d/1C6iLzRnoEpi0W-0--79GHUlaA9CYxgo3ENujCabfRDk/edit" }
      },
      {
        id: 2, type: "mc", lo: "LO2",
        text: "You want to include a non-standard discount in your proposal. Before you tell the customer what you can offer, what must happen first?",
        options: ["Nothing — you can share a discount range with the customer and finalize the exact number later", "Deal Desk must approve the discount first. Sharing an unapproved number — even informally — creates an expectation you may not be able to honor. The sequence is approval first, then customer conversation.", "Get your manager's verbal sign-off in Slack before the customer meeting — that's sufficient for standard situations", "Check what discounts other AEs have used on similar deals and match the closest precedent"],
        correct: 1,
        explanation: "Discount commitments must be approved before they're shared with customers. Presenting an unapproved number — even informally — sets an anchor that's extremely hard to walk back. The sequence is: Deal Desk approval → champion alignment → proposal to customer, not the other way around.",
        resource: { label: "Deal Desk Session Slides", url: "https://docs.google.com/presentation/d/1C6iLzRnoEpi0W-0--79GHUlaA9CYxgo3ENujCabfRDk/edit" }
      },
      {
        id: 3, type: "mc", lo: "LO2",
        text: "You're building a quote in CPQ. The tool flags an error because the configuration you've built doesn't match a valid packaging combination. What do you do?",
        options: ["Override the error and proceed — CPQ flags issues that are often minor formatting problems", "Stop. CPQ errors signal an invalid or non-standard deal structure. Either reconfigure to a valid option or open a Deal Desk case to determine if an exception exists. Overriding creates deals that can't be fulfilled.", "Delete the error and resubmit — sometimes the system flags things incorrectly and it resolves itself", "Ask the customer if they'd be open to a slightly different structure that the system accepts"],
        correct: 1,
        explanation: "CPQ errors exist to prevent invalid deals from being presented to customers. Overriding or ignoring them is how deals get submitted that can't actually be fulfilled — which creates rework, disappointed customers, and potential legal issues. Treat CPQ errors as a signal to stop and resolve, not bypass.",
        resource: { label: "CPQ Demo Video (21m)", url: "https://amplitude.zoom.us/clips/share/J3jESXUBQs2gJpOAHXrSXg" }
      },
      {
        id: 4, type: "tf", lo: "LO3",
        text: "True or False: The right time to start understanding the approval path for a complex deal is when the customer says they're ready to buy.",
        options: ["True", "False"],
        correct: 1,
        explanation: "False. Understanding the approval path — discount approvals, non-standard terms, executive sign-off requirements — should happen mid-deal, not when the customer is ready to close. Last-minute discovery of a required approval chain is one of the most common causes of quarter-end slippage.",
        resource: { label: "Deal Desk Session Slides", url: "https://docs.google.com/presentation/d/1C6iLzRnoEpi0W-0--79GHUlaA9CYxgo3ENujCabfRDk/edit" }
      },
      {
        id: 5, type: "mc", lo: "LO3",
        text: "A customer asks for a multi-year deal with year 1 at a 35% discount, ramping to full price in year 3. This is outside standard policy. What's your process?",
        options: ["Tell the customer yes and work out the approval internally after they agree to terms", "Open a Deal Desk case from the associated opportunity in Salesforce, lay out the structure clearly, and get approval before committing. You can tell the customer you're working to align internally — just don't commit first.", "Decline the structure entirely — ramp deals with heavy upfront discounts are outside Amplitude's model", "Build the deal in CPQ as requested and submit it — Deal Desk will flag it if there are issues"],
        correct: 1,
        explanation: "Non-standard multi-year structures require Deal Desk approval before any commitment to the customer. The right language with the customer is: 'I want to make sure we can get this structure approved — let me work on it with our team and get back to you.' This is honest, manages expectations, and sets up the right internal process.",
        resource: { label: "MindTickle: Deal Desk Training for PPL 2026", url: "https://lms.amplitude.com/new/ui/learner/training/programs/2043719217316580035/modules" }
      },
      {
        id: 6, type: "fill", lo: "LO1",
        text: "CPQ stands for Configure, ________, Quote — the tool AEs use to build compliant, structured pricing proposals for customers.",
        correct: ["price", "pricing"],
        placeholder: "one word...",
        explanation: "CPQ = Configure, Price, Quote. It's the tool that ensures quotes are built from valid packaging combinations at accurate prices within approved discount bands — before they're presented to customers.",
        resource: { label: "CPQ Demo Video (21m)", url: "https://amplitude.zoom.us/clips/share/J3jESXUBQs2gJpOAHXrSXg" }
      },
      {
        id: 7, type: "mc", lo: "LO2",
        text: "What does 'Sales Stage 6.5' represent, and why does it matter?",
        options: ["A placeholder stage for deals that are stuck in negotiation and haven't progressed in 30+ days", "A defined stage in the Salesforce opportunity progression with specific entry and exit criteria. Knowing what 6.5 requires means you move deals through it accurately instead of skipping required steps or logging it incorrectly.", "A Deal Desk approval stage that becomes visible only after you submit a non-standard pricing request", "An internal stage used to track deals that have been verbally agreed but not yet formally signed"],
        correct: 1,
        explanation: "Sales Stage 6.5 is a defined stage in Amplitude's opportunity progression with specific criteria for what needs to be true to be in it and what needs to happen to exit it. Knowing the stages and their requirements isn't bureaucracy — it's how you manage the deal accurately in Salesforce and give your manager a reliable read on where things stand.",
        resource: { label: "Sales Stage 6.5 Clip", url: "https://amplitude.zoom.us/clips/share/KIeN2E7PS62-kBU--pGQUg" }
      },
      {
        id: 8, type: "mc", lo: "LO3",
        text: "You're 3 weeks from quarter close and you realize a deal you planned to close needs Deal Desk approval that you haven't started. What's the risk, and what do you do right now?",
        options: ["High risk. Open the case now and flag the timeline explicitly — proactive urgency from you gives Deal Desk the context to prioritize. Cases opened in the last week of the quarter almost always slip.", "Manageable — Deal Desk handles end-of-quarter cases regularly and has a fast-track process for urgent approvals. Open the case this week and you'll likely still make it.", "Low risk if the structure is straightforward — Deal Desk turnaround for standard approvals is typically 24–48 hours, which is well within a 3-week window.", "High risk, but the fastest fix is to restructure the deal to be within your standard authority so you don't need Deal Desk approval at all."],
        correct: 0,
        explanation: "Deal Desk cases opened in the last week of a quarter are at high risk of slipping the close date. Three weeks is workable — but only if you open the case immediately, flag the timeline explicitly, and stay on top of the process. Urgency has to come from you, not from the calendar.",
        resource: { label: "Deal Desk Session Slides", url: "https://docs.google.com/presentation/d/1C6iLzRnoEpi0W-0--79GHUlaA9CYxgo3ENujCabfRDk/edit" }
      },
      {
        id: 9, type: "mc", lo: "LO1",
        text: "How do you formally engage Deal Desk for pricing and quoting help on a 2026 PPL deal?",
        options: ["Open a case from the associated opportunity in Salesforce — this links the request to the right deal, routes it to the right rep, and keeps all Deal Desk communication tied to the opportunity record.", "Send a direct Slack message to the Deal Desk rep for your region — it's faster than a case and ensures you're working with someone who knows your territory.", "Post in #gtm-pricing-packaging-help with the opportunity link — it gets visibility from multiple Deal Desk members and is faster than the formal case process.", "Email the Deal Desk distribution list with the opportunity details — email creates a paper trail and is the preferred channel for anything requiring formal approval."],
        correct: 0,
        explanation: "The correct process is opening a case from the associated opportunity in Salesforce. This ensures traceability, routes the request to the right person, and keeps all Deal Desk communication linked to the deal record — not floating in a Slack thread that gets buried.",
        resource: { label: "Deal Desk Session Slides", url: "https://docs.google.com/presentation/d/1C6iLzRnoEpi0W-0--79GHUlaA9CYxgo3ENujCabfRDk/edit" }
      },
      {
        id: 10, type: "mc", lo: "LO3",
        text: "A customer says they want to start with a smaller deal now and expand significantly in 6 months. What Deal Desk consideration should you keep in mind when structuring the initial deal?",
        options: ["Design the initial deal so expansion is structurally easy — use pricing and term mechanics consistent with where you expect to go, and flag the expansion intent to Deal Desk so the initial structure doesn't create conflicts at renewal.", "Structure the initial deal at full expansion price since the customer has indicated they plan to grow — it simplifies the later conversation and avoids a renegotiation", "Keep the expansion plan out of the Deal Desk conversation for now — surfacing future intentions complicates the initial approval and slows the current deal down unnecessarily", "Insist on closing the full anticipated deal now and position the smaller initial number as a concession — it demonstrates confidence in the relationship and avoids a second sales cycle"],
        correct: 0,
        explanation: "Initial deal structure should be designed with expansion in mind. Term lengths, pricing mechanics, and packaging choices that are inconsistent with where the deal is going create rework and friction at expansion. Flagging the customer's expansion intent to Deal Desk upfront means the initial structure is architected to accommodate growth.",
        resource: { label: "Deal Desk Session Slides", url: "https://docs.google.com/presentation/d/1C6iLzRnoEpi0W-0--79GHUlaA9CYxgo3ENujCabfRDk/edit" }
      }
    ]
  },
  {
    id: "day15", day: "Day 15", title: "Leveraging Solution Engineers & Professional Services", week: "Week 4",
    questions: [
      {
        id: 1, type: "mc", lo: "LO2",
        text: "You're scheduling a technical discovery call and want to bring your SE. To make the SE a Challenger in the room — not just a product expert — what do you give them before the meeting?",
        options: ["The account name, the Salesforce opportunity link, and the stage — enough context to prepare without over-directing their approach", "A brief covering the customer's goals, technical context, the Commercial Insight you've been building, and specifically what you want the SE to accomplish in this call. An SE without context gives demos; an SE with Challenger context helps you Teach and build Constructive Tension through technical credibility.", "The discovery notes from your previous calls — a thorough briefing gives the SE full context and lets them adapt in the moment without over-scripting the conversation", "A list of technical questions the customer has already asked — it focuses the SE on what the customer cares about rather than a generic capabilities walk-through"],
        correct: 1,
        explanation: "An SE who walks in with the Commercial Insight and a specific objective for the call is an extension of the Challenger conversation. They're not there to demo — they're there to help build Constructive Tension through technical specificity, validate claims you've made, and reinforce the insight you've been building together. An SE without that context defaults to product presentation — leading with your solution rather than leading to it. The brief is what makes the SE a Challenger in the room, not just a subject matter expert.",
        resource: { label: "Leveraging SEs Slides", url: "https://docs.google.com/presentation/d/1kDmK2l_Ahv01UlrBDSWoPqhtT70dQTcBT2GJ6PoSZzA/edit" }
      },
      {
        id: 2, type: "mc", lo: "LO3",
        text: "A technical prospect asks a detailed question about Amplitude's data ingestion architecture during a discovery call. You don't know the answer. What do you do?",
        options: ["Tell them you'll find out and get back to them — or defer to your SE if they're on the call. Guessing on technical accuracy damages trust far more than admitting you don't have the answer.", "Give your best answer based on what you know — showing confidence matters, and you can correct any inaccuracies in a follow-up email after the call.", "Redirect the question: 'Great question — let's add that to the follow-up list and make sure we address it with the right person on our side.'", "Acknowledge the question and move on — getting too deep into technical details early in the sales process shifts the conversation away from business value."],
        correct: 0,
        explanation: "'I don't know, but I'll get you the right answer' is more credible than a wrong answer. Technical prospects test AEs — and they know when they're being bullshitted. Deferring to your SE or following up with accuracy is always the right move for building trust with technical buyers.",
        resource: { label: "Leveraging SEs Slides", url: "https://docs.google.com/presentation/d/1kDmK2l_Ahv01UlrBDSWoPqhtT70dQTcBT2GJ6PoSZzA/edit" }
      },
      {
        id: 3, type: "mc", lo: "LO3",
        text: "Your champion says: 'We love Amplitude but our CTO wants a technical proof of concept before approving budget.' A Challenger Takes Control of the POC. What does that look like?",
        options: ["Agree to an open-ended POC and let the CTO define success — giving the technical buyer full ownership signals confidence in the product and reduces friction", "Offer an extended free trial instead — it achieves the same validation objective with less coordination overhead and no defined timeline pressure", "Loop in your SE immediately and align on a scoped POC plan: clear success criteria, defined timeline, and agreed milestones. A POC without defined success criteria is an indefinite evaluation — a verifier with no binary outcome. Taking Control means you define what 'done' looks like before you start.", "Treat the POC request as a Blocker signal — CTOs who request POCs at late stage are often using technical evaluation as a stall tactic, and a Challenger pushes back on the framing"],
        correct: 2,
        explanation: "Taking Control of a POC means turning it into a verifier sequence: specific success criteria (binary — either met or not), a defined timeline, and agreed milestones that tell both sides whether to continue. Without this, a POC becomes an open-ended evaluation that drags indefinitely because there's no 'done.' A powerful request to the CTO — 'What three things would the POC need to demonstrate for you to feel confident recommending this to the board?' — transforms the POC from a blocker into a closing motion. Option A (letting the CTO define success) is relinquishing control at the most critical moment.",
        resource: { label: "Leveraging SEs Slides", url: "https://docs.google.com/presentation/d/1kDmK2l_Ahv01UlrBDSWoPqhtT70dQTcBT2GJ6PoSZzA/edit" }
      },
      {
        id: 4, type: "mc", lo: "LO3",
        text: "A new customer just signed. They're excited but your sense from the deal is that their engineering team is small and they've never done a serious analytics instrumentation project. What should you recommend at close?",
        options: ["Proactively recommend a Professional Services engagement — customers who struggle with implementation rarely reach full adoption, and low adoption at renewal is your problem too. Recommend it at close, not after go-live.", "Congratulate them and let your CSM own the onboarding — implementation risk is a post-sale concern and the CSM is better positioned to assess and address it than the AE.", "Offer to connect them with customer references who self-implemented successfully — peer validation reduces anxiety without adding cost to the deal.", "Flag it internally to your SE and PS team but don't raise it with the customer — implementation concerns surfaced at signing can create last-minute deal hesitation."],
        correct: 0,
        explanation: "Implementation risk identified at close is exactly when Professional Services should be recommended. An under-resourced team attempting a complex instrumentation project is a predictable churn pattern. Proactively recommending PS is not upselling for its own sake — it's protecting the customer's success and your renewal.",
        resource: { label: "Professional Services Slides (Spekit)", url: "https://app.spekit.co/app/wiki/asset/8b062e6d-9345-4eba-a4fb-7df608ea7772?type=asset&expanded=true" }
      },
      {
        id: 5, type: "tf", lo: "LO3",
        text: "True or False: Professional Services should be positioned primarily as a cost reduction for the customer — helping them save money on engineering time.",
        options: ["True", "False"],
        correct: 1,
        explanation: "False. The right positioning for PS is as a strategic investment that de-risks deployment and accelerates time-to-value — not primarily a cost play. 'Saving engineering time' is a supporting point, but the headline is: 'get to value faster, with less risk, with experts who've done this before.' Customers invest in outcomes, not savings.",
        resource: { label: "Professional Services Slides (Spekit)", url: "https://app.spekit.co/app/wiki/asset/8b062e6d-9345-4eba-a4fb-7df608ea7772?type=asset&expanded=true" }
      },
      {
        id: 6, type: "mc", lo: "LO2",
        text: "A prospect's Head of Engineering asks: 'What does a typical implementation look like and how long does it take?' You don't know the specifics for their use case. What's the right answer?",
        options: ["Bring in PS for a scoped conversation — the timeline depends on instrumentation complexity, existing data infrastructure, and team bandwidth. PS can give them an accurate picture based on their specific situation.", "Give a range based on similar customers: most companies your size are fully instrumented within 4–6 weeks, though it varies. Set expectations now and follow up with specifics.", "Tell them implementation timing is a post-sale conversation — the sales process should stay focused on value and outcomes, not technical logistics.", "Reassure them that Amplitude's documentation and onboarding resources are best-in-class and that most technical teams are up and running faster than they expect."],
        correct: 0,
        explanation: "Implementation timelines vary significantly by use case and technical complexity. Giving a generic answer to a Head of Engineering who will hold you to it is a trust risk. The right move is to bring in PS for an accurate, case-specific answer — and position this as you taking their question seriously enough to get the right experts in the room.",
        resource: { label: "Professional Services Slides (Spekit)", url: "https://app.spekit.co/app/wiki/asset/8b062e6d-9345-4eba-a4fb-7df608ea7772?type=asset&expanded=true" }
      },
      {
        id: 7, type: "mc", lo: "LO1",
        text: "What does POD-based selling mean at Amplitude — and how does a Challenger orchestrate the POD rather than just participate in it?",
        options: ["The AE leads all external conversations while SE, CS, and PS support internally — clean role separation prevents customer confusion about who to talk to", "Each POD member owns the customer relationship during their phase: SE in evaluation, AE in negotiation, CS at go-live — sequential handoffs ensure continuity", "A cross-functional team where each member brings specific Challenger expertise at the right moment — the AE orchestrates by knowing when to deploy the SE's technical credibility, the CSM's adoption insight, or the PS team's implementation proof, all in service of a single coherent Commercial Insight.", "A coverage model that ensures every strategic account has multiple Amplitude stakeholders involved — redundancy protects against single points of failure in the relationship"],
        correct: 2,
        explanation: "Challenger describes this as team orchestration — and the AE is the conductor. The SE builds Constructive Tension through technical specificity and validates claims. The CSM brings the adoption story that proves value realization is real, not theoretical. PS provides the implementation proof that de-risks the decision. Each POD member extends a different dimension of the Commercial Insight at the right moment in the buying process. An AE who just 'participates' in the POD is being reactive; an AE who orchestrates it is Taking Control of how the customer experiences the entire Amplitude team.",
        resource: { label: "Leveraging SEs Slides", url: "https://docs.google.com/presentation/d/1kDmK2l_Ahv01UlrBDSWoPqhtT70dQTcBT2GJ6PoSZzA/edit" }
      },
      {
        id: 8, type: "mc", lo: "LO3",
        text: "You're in a competitive deal and the other vendor has offered a free professional services package as part of their deal. How do you respond to this?",
        options: ["Acknowledge the offer, then reframe around outcomes: free services typically means limited scope or junior resources, and poor implementation creates data debt. Amplitude PS brings domain expertise that accelerates value — that difference matters more than the upfront cost.", "Match the offer — making PS free removes a friction point and keeps the deal from stalling on a line item that could be absorbed", "Challenge the competitor directly: free services signals margin pressure, and customers who accept it often pay a hidden cost in implementation quality", "Offer a reduced-cost PS package as a compromise — meeting the customer partway signals flexibility without fully giving up the value of professional services"],
        correct: 0,
        explanation: "Free services are often a discounting tactic, not a quality signal. The right counter isn't to match it — it's to elevate the conversation around outcomes. 'Expert implementation that leads to faster value' is a more defensible position than 'we'll also make it free.' Price competition on services undermines the value of the services themselves.",
        resource: { label: "Amplitude Services Catalog H1 FY2025 (Spekit)", url: "https://app.spekit.co/app/wiki/asset/6d435896-7966-44ad-a3d4-5d8e46ea8874?type=asset&expanded=true" }
      },
      {
        id: 9, type: "mc", lo: "LO1",
        text: "A customer just signed and you know their engineering team is small and under-resourced. You believe they'll struggle with instrumentation on their own. What's the risk of staying quiet about it at close?",
        options: ["Low risk — implementation challenges are a post-sale concern and the CSM is better positioned to surface and address them once onboarding begins", "Real risk. Customers who struggle with implementation rarely reach full adoption, and low adoption at renewal becomes your commercial problem. Recommending PS at close — framed as accelerating time-to-value — is the right move, not an upsell.", "Moderate risk — flag it internally to your SE and PS team but don't raise it with the customer, since surfacing concerns at signing can create last-minute hesitation", "No risk — the customer signed knowing their own team capacity, and second-guessing their implementation plan after contract signature damages the relationship you built during the sale"],
        correct: 1,
        explanation: "Implementation risk identified at close is the best moment to recommend Professional Services — not because it's revenue, but because poor instrumentation compounds into bad data, wrong decisions, low adoption, and churn. Staying quiet to protect the relationship is short-term thinking. A customer who succeeds post-sale is a customer who renews and expands. Framing PS as a strategic investment in their time-to-value rather than an add-on is the Challenger move — lead to the solution, don't avoid it.",
        resource: { label: "Professional Services Slides (Spekit)", url: "https://app.spekit.co/app/wiki/asset/8b062e6d-9345-4eba-a4fb-7df608ea7772?type=asset&expanded=true" }
      },
      {
        id: 10, type: "mc", lo: "LO3",
        text: "You've just been asked to support a renewal expansion where the customer wants to add two new use cases. What SE and PS contributions are most valuable at this stage?",
        options: ["SE can validate technical feasibility of the new use cases and demo them in the customer environment, while PS scopes the implementation work. Together they de-risk the expansion decision from both a technical and delivery standpoint.", "Only PS — the customer already bought technically, so SE involvement is redundant and adds unnecessary process to what should be a streamlined expansion conversation", "Only SE — PS is a post-sale function and should not be introduced until the expansion contract is signed and implementation planning formally begins", "Neither — this is an existing customer who already knows the product, so SE and PS involvement creates complexity without meaningfully changing the expansion outcome"],
        correct: 0,
        explanation: "Expansion into new use cases often has the same technical and implementation considerations as a new deal. SE involvement validates that the use cases are achievable in the customer's environment. PS scoping shows the customer exactly what expansion will require — turning 'how hard will this be?' from a risk into a clear plan.",
        resource: { label: "Professional Services Slides (Spekit)", url: "https://app.spekit.co/app/wiki/asset/8b062e6d-9345-4eba-a4fb-7df608ea7772?type=asset&expanded=true" }
      }
    ]
  }
];