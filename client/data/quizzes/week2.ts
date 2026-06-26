import type { Quiz } from "../quiz-types.js";

export const week2Quizzes: Quiz[] = [
  {
    id: "day1", day: "Day 1", title: "ICP: Personas & Industries", week: "Week 2",
    questions: [
      {
        id: 1, type: "mc", lo: "LO3",
        text: "You're assigned a territory account: a 400-person company that manufactures industrial equipment and sells exclusively through a distributor network — no digital product, no app. How do you handle this account?",
        options: ["Book a discovery call immediately — every company could use analytics", "Deprioritize it. No digital product means no natural use case for Amplitude.", "Add them to a generic outreach sequence and see if they respond", "Flag it for your CSM to handle"],
        correct: 1,
        explanation: "Amplitude's value is rooted in digital product analytics. Without a digital product or user experience generating behavioral data, there's no Amplitude use case. Prioritize accounts where a product team is making decisions based on user behavior.",
        resource: { label: "ICP: Personas & Industries Deck", url: "https://docs.google.com/presentation/d/1i6jAipawDy9ER5Bls-FFdXdr4hQA41XKw-wYqK5RttE/edit" }
      },
      {
        id: 2, type: "mc", lo: "LO2",
        text: "You're in discovery with a VP of Product at a Series B fintech. They say: 'We ship features fast but honestly don't know which ones are actually getting used.' To Teach effectively, you need to anchor to the right value driver first. Which one?",
        options: ["Cost reduction — Amplitude replaces multiple point solutions and simplifies their tech stack", "Feature adoption visibility — understanding which features drive engagement connects directly to their stated pain and sets up a Challenger conversation about retention and roadmap decisions", "Compliance and data governance — regulated industries always have this as an underlying concern", "Experiment velocity — the ability to run more A/B tests is what product teams at their stage care about most"],
        correct: 1,
        explanation: "Effective Challenger Teaching always starts where the customer already feels pain — then deepens it. The VP explicitly named the gap between what they build and what users do. Anchoring to feature adoption visibility meets them where they are, then opens the door to teach them about the downstream cost of not knowing: wasted roadmap cycles, poor retention, and compounding product debt. Leading with cost reduction or experimentation skips the pain they just told you about.",
        resource: { label: "Value Drivers Deck", url: "https://docs.google.com/presentation/d/1ODJk8BUphrI5cgGSxxjj91xie0B9k2WiECGLnX9xwU0/edit" }
      },
      {
        id: 3, type: "mc", lo: "LO3",
        text: "You're reviewing your territory. Account A is a 150-person B2B SaaS company, Series B, just launched a mobile app, using Google Analytics only. Account B is a 2,000-person enterprise retailer with a loyalty app, a dedicated analytics team, and a current Mixpanel contract up for renewal in 6 months. Which do you prioritize and why?",
        options: ["Account A — it's smaller and easier to close", "Account B — larger company with a clear ICP signal and a competitive opportunity with a defined timeline", "Both equally — run the same sequence to both", "Neither — wait for inbound interest from accounts this size"],
        correct: 1,
        explanation: "Account B hits every ICP signal: digital product (loyalty app), dedicated analytics investment (team already exists), and a competitive displacement opportunity with a known renewal date. That's a defined window. Account A is worth working but the urgency and signal strength are lower.",
        resource: { label: "ICP: Personas & Industries Deck", url: "https://docs.google.com/presentation/d/1i6jAipawDy9ER5Bls-FFdXdr4hQA41XKw-wYqK5RttE/edit" }
      },
      {
        id: 4, type: "mc", lo: "LO1",
        text: "A Head of Growth at a media company asks: 'Why would we need Amplitude? We already have Google Analytics.' What's the most effective response?",
        options: ["Acknowledge it and pivot: 'Fair point — Google Analytics tells you who came and from where. Amplitude tells you what users do after they arrive, which features actually stick, and how behavior connects to retention. Different tools, different questions.'", "'Google Analytics is a solid starting point, but companies at your growth stage typically find they need more depth to make confident product decisions — we see that a lot with Head of Growth teams.'", "'Most companies your size have moved beyond Google Analytics for exactly this reason — happy to share what that transition looks like and why teams make it.'", "'I'd want to understand your current setup before answering that — can you walk me through how you're using Google Analytics today and where it's falling short?'"],
        correct: 0,
        explanation: "The right response reframes the conversation around behavioral depth — Google Analytics tells you about traffic, Amplitude tells you about what users do after they arrive. This is the core differentiation that resonates with a Head of Growth focused on activation and retention.",
        resource: { label: "Spekit: Industries Hub", url: "https://app.spekit.co/app/wiki/?&topic=0a75288e-bbe4-423c-ae30-fd5703b8ad43&tag=Industries" }
      },
      {
        id: 5, type: "tf", lo: "LO2",
        text: "True or False: When meeting with a Data Engineer persona, you should lead with the same value message you'd use with a VP of Product — both care about the same outcomes.",
        options: ["True", "False"],
        correct: 1,
        explanation: "False. A Data Engineer cares about pipeline reliability, data quality, and reducing the custom-build burden on their team. A VP of Product cares about feature adoption and user behavior insights. Same platform, completely different value framing — always tailor to the persona's actual KPIs.",
        resource: { label: "Spekit: Personas Hub", url: "https://app.spekit.co/app/wiki/?&topic=240af8a2-52c3-4f30-ad21-fdcab0c093fe&tag=Personas" }
      },
      {
        id: 6, type: "mc", lo: "LO1",
        text: "You're prospecting into a healthtech company. The job board shows they're hiring a 'Head of Product Analytics' and a 'Growth Engineer.' What do these signals tell you, and how does it change your approach?",
        options: ["This signals they've committed budget and headcount to product data — they're deciding which tool to use, not whether to invest. Prioritize and personalize your outreach now, before new hires form their own vendor preferences.", "Wait until the roles are filled before reaching out — the new hires will make the tooling decision and engaging before they arrive means your conversation gets lost in the transition", "Job postings are useful for understanding team structure, but they don't indicate active buying intent — use them to inform your ICP scoring, not to prioritize outreach timing", "This means the company is early-stage in building out analytics — come back in 6–12 months when they have people in place who can evaluate and implement a new tool"],
        correct: 0,
        explanation: "Job postings for analytics-specific roles are one of the strongest ICP signals you can find. The company has already approved the budget, defined the need, and is actively building the capability. Your window to shape the conversation is now — before those hires make incumbent decisions.",
        resource: { label: "Discovery Question Repository", url: "https://docs.google.com/document/d/11po0r9LxK_tiooyYb64bdDeqhIhRX_7k-HSlPppf1A4/edit" }
      },
      {
        id: 7, type: "mc", lo: "LO2",
        text: "A CMO at a retail company says: 'We care about acquiring customers, not product analytics.' Rather than accepting their frame, a Challenger Teaches by reframing the issue. What's the right move?",
        options: ["Agree and redirect — this isn't the right persona for Amplitude, so move toward their Head of Product instead", "Offer a free trial — let the CMO discover the value themselves rather than trying to convince them in the conversation", "Teach them the connection they're missing: the channels that drive acquisition matter less than which ones bring users who actually stay. Amplitude connects campaign spend to downstream retention and LTV — that's a CMO problem, framed in CMO language.", "Position Amplitude as a marketing analytics tool — reframe the category to match what they said they care about"],
        correct: 2,
        explanation: "This is a classic Challenger Teach moment — the CMO has a blind spot. They're optimizing for acquisition without knowing which acquisition channels produce users who actually retain and convert. Your job isn't to agree with their frame or change topics — it's to reframe the problem so they see something they haven't considered. 'Not all acquired customers are equal' is a commercial insight that leads directly to Amplitude's value without requiring them to care about 'product analytics' as a category.",
        resource: { label: "Spekit: Personas Hub", url: "https://app.spekit.co/app/wiki/?&topic=240af8a2-52c3-4f30-ad21-fdcab0c093fe&tag=Personas" }
      },
      {
        id: 8, type: "fill", lo: "LO3",
        text: "An account scores high on ICP fit — digital product, growing team, right industry — but your research shows they just signed a 3-year contract with a competitor 4 months ago. The right move is to ________ the account, not abandon it.",
        correct: ["nurture", "deprioritize", "monitor", "track", "watch"],
        placeholder: "one word — what do you do with it...",
        explanation: "A locked-in competitor contract doesn't mean zero opportunity — it means the timing is wrong today. The right move is to nurture: stay warm, build a relationship, and position Amplitude so you're in the conversation when renewal comes around. Don't waste heavy sales effort now, but don't abandon a strong ICP account either.",
        resource: { label: "ICP: Personas & Industries Deck", url: "https://docs.google.com/presentation/d/1i6jAipawDy9ER5Bls-FFdXdr4hQA41XKw-wYqK5RttE/edit" }
      },
      {
        id: 9, type: "mc", lo: "LO1",
        text: "Which of the following industries is NOT listed in Amplitude's target verticals?",
        options: ["Media & Entertainment", "Financial Services / Fintech", "Commercial Real Estate", "Retail & E-commerce"],
        correct: 2,
        explanation: "Amplitude's target verticals include Media & Entertainment, Financial Services/Fintech, Retail & E-commerce, Healthcare/Healthtech, and B2B/Productivity SaaS. Commercial Real Estate is not a target vertical — the absence of a consumer-facing digital product makes the fit weak.",
        resource: { label: "Spekit: Industries Hub", url: "https://app.spekit.co/app/wiki/?&topic=0a75288e-bbe4-423c-ae30-fd5703b8ad43&tag=Industries" }
      },
      {
        id: 10, type: "mc", lo: "LO2",
        text: "You're in a discovery call with a Head of Data at a B2B SaaS company. They say: 'We have a data warehouse and our engineers build all of our internal dashboards.' What's the risk if you position Amplitude as a replacement for their warehouse?",
        options: ["Acknowledge it and reframe: Amplitude reads user behavior inside the product, not just traffic patterns. The question isn't whether they have analytics — it's whether they can act on what users actually do after they arrive.", "Agree — if they're satisfied with Google Analytics, there's no urgency to change. Come back when they mention a specific gap or problem.", "Position Amplitude as the next step up: Google Analytics is a good starting point, but companies at their stage typically need more depth to drive retention and product decisions.", "Ask them to run both tools in parallel for 90 days — the comparison will make the value of Amplitude obvious without you having to argue it."],
        correct: 0,
        explanation: "Positioning Amplitude as a warehouse replacement is both technically wrong and a credibility killer with a data-savvy persona. The accurate and resonant message is that Amplitude reduces the custom engineering work required to surface product insights from raw warehouse data — freeing engineers for higher-value work.",
        resource: { label: "Spekit: Personas Hub", url: "https://app.spekit.co/app/wiki/?&topic=240af8a2-52c3-4f30-ad21-fdcab0c093fe&tag=Personas" }
      }
    ]
  },
  {
    id: "day2", day: "Day 2", title: "TOFU – MQLs & Inbounds", week: "Week 2",
    questions: [
      {
        id: 1, type: "mc", lo: "LO3",
        text: "An inbound lead comes in at 9am. The prospect downloaded a whitepaper and matches your ICP. It's now 4pm and you haven't followed up. A Challenger Takes Control of the buying process — what does your delay signal, and what should you have done?",
        options: ["Nothing problematic — same-day follow-up is standard and 4pm is still within the window", "You've let the buying process run without you. Speed-to-lead is how you Take Control early — the moment a prospect signals intent, you shape the conversation before they move on, form their own conclusions, or engage a competitor.", "You should have researched the company thoroughly before reaching out — a generic fast response is worse than a slower, personalized one", "Inbound leads are lower urgency than outbound — the prospect initiated contact, so they'll wait for a thoughtful reply"],
        correct: 1,
        explanation: "Taking Control means proactively guiding the buying process — and it starts at first contact. A 7-hour lag on a high-intent inbound lead is a failure to take control at the moment it matters most. The prospect's intent decays, they form their own frame of the problem without your input, and you lose the Challenger advantage of shaping their thinking early. Fast, relevant follow-up is how you enter the conversation on your terms.",
        resource: { label: "TOFU Session Recording", url: "https://amplitude.zoom.us/clips/share/yab3n545SK-co7Ars_1Bmw" }
      },
      {
        id: 2, type: "mc", lo: "LO1",
        text: "A lead comes in flagged as an MQL. What does that actually mean, and what's your job now?",
        options: ["They've requested a demo — schedule it immediately", "They've met a scoring threshold based on intent signals and fit criteria, and they've been routed to you for follow-up. Your job is to review context, determine the right approach, and act fast.", "They've been pre-qualified by your SDR partner — just add them to a closing sequence", "They've expressed interest but need to be re-routed to marketing first"],
        correct: 1,
        explanation: "MQL = Marketing Qualified Lead. The scoring model has flagged them as worth AE attention based on behavioral signals and fit. But it's not a done deal — your job is to bring context to the outreach (why this lead, why now, what's relevant to them) and respond with speed and relevance.",
        resource: { label: "TOFU Session Slides", url: "https://docs.google.com/presentation/d/1cFxBuOQyJxSEnN34JrolHsnzc2DhdgUX-bxtBM_xYDM/edit" }
      },
      {
        id: 3, type: "mc", lo: "LO3",
        text: "You get an inbound lead from a company that looks like a great ICP fit — but when you dig in, the contact is a junior analyst with no budget authority and the company already uses Amplitude in another division. What's the right move?",
        options: ["Disqualify immediately and archive the lead", "Accept the lead, note the context in Salesforce, and determine the best path — likely connecting to the right champion or account team, not a standard new logo follow-up", "Run the standard new logo sequence — you don't know enough yet to change the approach", "Escalate to your manager before taking any action"],
        correct: 1,
        explanation: "This requires judgment, not a template. The right move is to accept the lead, document the context accurately in Salesforce, and figure out the smartest path forward — which likely means connecting to the right internal stakeholder or treating this as an expansion play rather than a new logo motion.",
        resource: { label: "TOFU Playlist: Quick Hit Clips", url: "https://amplitude.zoom.us/clips/share/play-list/a8fa9ac2312b412bbdc6e71651fb942c" }
      },
      {
        id: 4, type: "tf", lo: "LO2",
        text: "True or False: The GTM Launch Pad in Salesforce shows you lead source, intent signals, and recommended next actions — making it your primary tool for managing inbound MQL activity.",
        options: ["True", "False"],
        correct: 0,
        explanation: "True. The Launch Pad Dashboard in Salesforce is your central view for TOFU management — it surfaces lead source, intent signals, and helps you prioritize and route your inbound activity. Knowing how to read it and act on it is a core daily skill.",
        resource: { label: "Launch Pad Dashboard (SFDC)", url: "https://amplitude.lightning.force.com/analytics/dashboard/0FKUw0000000gLpOAI" }
      },
      {
        id: 5, type: "mc", lo: "LO3",
        text: "A Breach Scenario appears in your MQL queue. What does this mean and what should you do?",
        options: ["A lead arrived from a breach of a data security policy — flag it to legal", "The SLA for following up on this lead has been exceeded. You need to acknowledge the breach, update the record, and follow up immediately — letting it sit longer compounds the problem.", "The lead has already been contacted by your SDR — no action needed", "The lead's company has breached your ICP criteria — disqualify it"],
        correct: 1,
        explanation: "A Breach Scenario means your response SLA has been exceeded. The right response is to acknowledge it, update Salesforce accurately, and follow up now. SLA hygiene matters for reporting, team trust, and actual conversion rates.",
        resource: { label: "TOFU Playlist: Breach Scenario Clip", url: "https://zoom.us/clips/share/614Oh8oLQn-f7H3pLL9KKQ?playlistId=a8fa9ac2312b412bbdc6e71651fb942c" }
      },
      {
        id: 6, type: "mc", lo: "LO3",
        text: "You're crafting follow-up to an inbound lead who downloaded a guide on 'product analytics for growth teams.' Which outreach approach is most likely to convert?",
        options: ["A generic intro email about Amplitude's full platform", "A personalized note that references the specific content they engaged with, connects it to a relevant customer outcome, and offers a clear, low-friction next step", "A cold call immediately without any email context", "Adding them to a 12-step automated sequence without any personalization"],
        correct: 1,
        explanation: "Context-rich, personalized outreach dramatically outperforms generic sequences on inbound leads. You already know what they're interested in — use it. Reference the content, connect it to an outcome that's relevant to their role, and make the next step easy.",
        resource: { label: "TOFU Session Recording", url: "https://amplitude.zoom.us/clips/share/yab3n545SK-co7Ars_1Bmw" }
      },
      {
        id: 7, type: "mc", lo: "LO2",
        text: "A Velocity Lead hits your queue. Compared to a standard MQL, a Velocity Lead requires a different response because taking control of the buying process looks different here. What's the distinction?",
        options: ["Velocity Leads are lower quality — they come from automated scoring, not true intent signals, so they warrant a more cautious approach", "Velocity Leads are higher urgency with their own scenario and handling process. Taking Control means responding with the right motion — not defaulting to the standard MQL playbook when the signal is different.", "Velocity Leads go to your SDR partner first — AEs shouldn't engage directly until the SDR qualifies them", "The main difference is speed — Velocity Leads just require faster follow-up using the same approach as any other MQL"],
        correct: 1,
        explanation: "Taking Control means knowing which motion to run and when. Velocity Leads carry a distinct intent signal that requires a specific response — not because they're higher or lower priority by default, but because the nature of the signal and the right next step are different from a standard MQL. Defaulting to the standard playbook when the lead type is different is a failure to take control with precision.",
        resource: { label: "TOFU Playlist: Velocity Leads Clip", url: "https://zoom.us/clips/share/fq_JrLZvQiGsAM6D7d0QwA?playlistId=a8fa9ac2312b412bbdc6e71651fb942c" }
      },
      {
        id: 8, type: "fill", lo: "LO3",
        text: "After reviewing an inbound lead, you determine it doesn't meet qualification criteria — wrong role, no digital product, outside your ICP. You should ________ the lead in Salesforce with a clear reason documented.",
        correct: ["disqualify", "reject", "mark as disqualified", "flag as disqualified"],
        placeholder: "what action do you take...",
        explanation: "Disqualifying leads with clear documentation is essential for pipeline hygiene and reporting accuracy. Don't let unqualified leads sit in your queue — clean data helps the whole team understand what's working in TOFU and what isn't.",
        resource: { label: "TOFU Playlist: Disqualify Scenario", url: "https://zoom.us/clips/share/zHyx94ByTcOXmyJ_7aWDkA?playlistId=a8fa9ac2312b412bbdc6e71651fb942c" }
      },
      {
        id: 9, type: "mc", lo: "LO2",
        text: "You've reviewed an inbound lead and it doesn't meet qualification criteria — wrong role, no digital product, outside ICP. Before moving on, what does Taking Control of your pipeline require you to do?",
        options: ["Archive the lead quietly — spending time on documentation for a dead lead is low-value use of your time", "Disqualify the lead in Salesforce with a clear reason documented. Clean pipeline data is how the whole GTM team takes control of what's working — bad data makes every downstream decision harder.", "Add them to a long-term nurture sequence — ICP criteria can shift, and keeping the lead warm costs nothing", "Route it to your SDR to make the final call — disqualification decisions shouldn't be made by AEs alone"],
        correct: 1,
        explanation: "Taking Control of your territory means owning the quality of your pipeline data, not just the deals in it. Disqualifying with a clear reason is a professional discipline — it keeps your queue clean, feeds accurate reporting to marketing and sales ops, and helps the whole team understand what ICP signals are working. Skipping documentation doesn't save time; it creates noise that slows everyone down.",
        resource: { label: "TOFU Playlist: Disqualify Scenario", url: "https://zoom.us/clips/share/zHyx94ByTcOXmyJ_7aWDkA?playlistId=a8fa9ac2312b412bbdc6e71651fb942c" }
      },
      {
        id: 10, type: "mc", lo: "LO3",
        text: "An inbound lead manually accepts via the Auto-Accept Scenario. What does this tell you, and how should your outreach differ from a standard cold outreach?",
        options: ["Auto-Accept means the system validated fit criteria — your outreach should be warmer and more specific than cold outreach. Lead with context and relevance, not a generic intro, because this isn't a cold open.", "Nothing different — treat it like any other prospect. The system may flag leads incorrectly, so standard outreach applies until you've done your own qualification", "Auto-Accept means the lead has already agreed to a demo — the system pre-qualified their intent, so you can skip discovery and move straight to scheduling", "Auto-Accept is a lower-priority signal than a Breach or Velocity Lead — follow up at the end of the week once higher-urgency leads are handled"],
        correct: 0,
        explanation: "Auto-Accept scenarios represent validated inbound intent. The prospect has been pre-qualified by the system. Your outreach should reflect that warmth — reference what triggered the lead, personalize to their context, and treat it like a warm conversation starter, not a cold open.",
        resource: { label: "TOFU Playlist: Auto-Accept Scenario", url: "https://zoom.us/clips/share/6NxcMoSzROG1F-DAVvcwzQ?playlistId=a8fa9ac2312b412bbdc6e71651fb942c" }
      }
    ]
  },
  {
    id: "day3", day: "Day 3", title: "GTM Launch Pad", week: "Week 2",
    questions: [
      {
        id: 1, type: "mc", lo: "LO3",
        text: "You sit down Monday morning to plan your week. You have 80 accounts in your territory. What does the GTM Launch Pad help you do that a spreadsheet can't?",
        options: ["It surfaces real-time pipeline coverage, stage distribution, and activity signals so you can prioritize which accounts and deals need attention — based on data, not gut feel.", "It creates AI-generated outreach recommendations for each account based on their behavior and engagement history.", "It replaces the need for weekly 1:1s by giving your manager a live view of your pipeline without you having to report on it.", "It automatically flags deals at risk and escalates them to your manager when activity drops below a defined threshold."],
        correct: 0,
        explanation: "The Launch Pad is your data-driven command center. It converts live Salesforce pipeline data into actionable territory signals — showing you where coverage is thin, where deals are stalling, and where to focus your time. A spreadsheet is static; the Launch Pad is live.",
        resource: { label: "GTM Launch Pad Slides", url: "https://docs.google.com/presentation/d/1tm_q5TJVRNYRrIB6wc5AGSmqTWyFDi3Na1EwO8tp80M/edit" }
      },
      {
        id: 2, type: "mc", lo: "LO2",
        text: "Your coverage ratio is 1.8x your quota. What does this signal, and what should you do about it?",
        options: ["1.8x is a warning sign — it's well below the 3–4x target, and the right response is aggressive pipeline building now, before it becomes a closing problem at quarter end.", "1.8x is healthy for this stage of the quarter — coverage ratios typically build over time and don't need to hit 3x until week 8 or 9.", "Coverage ratio at 1.8x means you should stop prospecting and focus entirely on advancing the pipeline you already have.", "1.8x signals that your deals are well-qualified — lower coverage with high-quality pipeline is better than 4x coverage with weak deals."],
        correct: 0,
        explanation: "Coverage ratio is a leading indicator of whether you can hit quota even if some deals slip. At 1.8x, a few deals falling through leaves you well short. The industry standard is 3–4x coverage. Seeing low coverage early gives you time to fix it — ignoring it doesn't.",
        resource: { label: "GTM Launch Pad Slides", url: "https://docs.google.com/presentation/d/1tm_q5TJVRNYRrIB6wc5AGSmqTWyFDi3Na1EwO8tp80M/edit" }
      },
      {
        id: 3, type: "mc", lo: "LO2",
        text: "You look at your stage distribution in the Launch Pad and see 70% of your pipeline is stuck in Stage 2. What does this tell you, and what's your action?",
        options: ["This signals a conversion problem — likely a qualification or champion issue. Dig into each deal: is there a real pain, a real decision process, and someone internally driving urgency?", "Stage 2 concentration is normal and healthy — most deals spend the majority of their time in discovery before moving to validation.", "The fix is to add more Stage 1 pipeline immediately — heavy Stage 2 concentration means the top of your funnel is too thin.", "This is a Salesforce hygiene issue — deals are probably mislabeled. Audit the stages and reclassify deals that should be further along."],
        correct: 0,
        explanation: "Heavy concentration in early stages indicates stalling — deals that entered discovery but haven't moved forward. This is often a symptom of weak MEDDPICC qualification: missing economic buyer access, unclear pain, or no champion driving urgency. The right move is surgical inspection, not just adding more pipeline.",
        resource: { label: "GTM Launch Pad Slides", url: "https://docs.google.com/presentation/d/1tm_q5TJVRNYRrIB6wc5AGSmqTWyFDi3Na1EwO8tp80M/edit" }
      },
      {
        id: 4, type: "tf", lo: "LO1",
        text: "True or False: You can access the GTM Launch Pad on your first day at Amplitude without requesting any additional access.",
        options: ["True", "False"],
        correct: 1,
        explanation: "False. The Launch Pad requires CRMA (CRM Analytics) access in Salesforce, which must be requested through Lumos in Slack. It's not provisioned automatically. This is a Day 3 pre-work step — if you don't have access before the session, you can't follow along with the demo.",
        resource: { label: "GTM Launch Pad Slides", url: "https://docs.google.com/presentation/d/1tm_q5TJVRNYRrIB6wc5AGSmqTWyFDi3Na1EwO8tp80M/edit" }
      },
      {
        id: 5, type: "mc", lo: "LO3",
        text: "Your manager asks in your 1:1: 'Walk me through your territory health.' A Challenger Takes Control by tracking customer — and territory — signals with precision. What three metrics anchor your answer?",
        options: ["Number of calls made, emails sent, and meetings booked — activity metrics show you're working the territory", "Pipeline coverage ratio, stage distribution, and conversion rates — these are the verifiers that show whether your territory has enough pipeline, where it's healthy, and how efficiently it's moving", "Total account count, average deal size, and days since last contact — account-level data shows territory breadth", "Close rate, win/loss ratio, and competitor frequency — outcome metrics show how the territory performs against the market"],
        correct: 1,
        explanation: "Just as Challengers use verifiers to track where a customer is in their buying process, you use territory metrics to track where your pipeline is in its health. Coverage ratio tells you if you have enough. Stage distribution tells you where things are stalling. Conversion rate tells you if motion is happening. Activity metrics show effort — these three show outcomes. Taking Control of your territory means tracking the right signals, not just the most visible ones.",
        resource: { label: "GTM Launch Pad Slides", url: "https://docs.google.com/presentation/d/1tm_q5TJVRNYRrIB6wc5AGSmqTWyFDi3Na1EwO8tp80M/edit" }
      },
      {
        id: 6, type: "mc", lo: "LO3",
        text: "You notice in the Launch Pad that three of your deals have had zero activity logged in 30 days. What's the risk, and what do you do?",
        options: ["No action needed — stale pipeline is a normal part of the sales cycle", "Re-engage now with a specific, value-led reason to reconnect. Silence means their priority has shifted — check-ins don't restart momentum, relevance does.", "Log a check-in note in Salesforce and let the deals close on their own timeline", "Push the close dates out by 30 days and adjust your forecast to reflect the delay"],
        correct: 1,
        explanation: "30 days of no activity on an active deal is a serious warning sign. Deals don't close themselves, and silence often means the prospect's priority has shifted. Re-engagement needs a reason — not 'just checking in,' but a specific trigger that earns their attention and restarts momentum.",
        resource: { label: "GTM Launch Pad Recording", url: "https://amplitude.zoom.us/clips/share/5RoV2b1DS6SwIHcUWDB__w" }
      },
      {
        id: 7, type: "mc", lo: "LO2",
        text: "What's the difference between using the Launch Pad reactively vs. proactively — and which approach drives better outcomes?",
        options: ["Proactive — reviewing it daily to build your action plan before problems surface. Reactive use only happens when your manager asks, which means you're already behind.", "Reactive — you should only pull data when something specific needs to be answered. Over-checking the dashboard creates noise without adding signal.", "They're equivalent in outcome — the data is the same whether you check it daily or weekly. What matters is how you act on it, not how often you look.", "Proactive for new AEs who are still learning their territory; reactive for experienced AEs who know their accounts well enough to flag issues without a dashboard."],
        correct: 0,
        explanation: "The Launch Pad is most valuable as a proactive daily habit. Reviewing it before your week is planned — not just when your manager asks — means you catch territory health issues while you still have time to course-correct. Reactive use is crisis management; proactive use is territory ownership.",
        resource: { label: "GTM Launch Pad Recording", url: "https://amplitude.zoom.us/clips/share/5RoV2b1DS6SwIHcUWDB__w" }
      },
      {
        id: 8, type: "fill", lo: "LO1",
        text: "The GTM Launch Pad is described as your 'single pane of ________' for managing pipeline and territory priorities.",
        correct: ["glass", "pane of glass"],
        placeholder: "complete the phrase...",
        explanation: "The Launch Pad is your 'single pane of glass' — a centralized view that surfaces all the data you need to run your territory without jumping between multiple tools or reports.",
        resource: { label: "GTM Launch Pad Slides", url: "https://docs.google.com/presentation/d/1tm_q5TJVRNYRrIB6wc5AGSmqTWyFDi3Na1EwO8tp80M/edit" }
      },
      {
        id: 9, type: "mc", lo: "LO3",
        text: "End of month. You have two deals in Stage 4. The Launch Pad shows both have been there for 45 days with close dates this week. What questions should you be asking yourself right now?",
        options: ["Do I have a signed order form? Is my champion actively sponsoring this internally? Has Legal reviewed terms? Is Deal Desk aligned on pricing? If any answer is 'not sure,' these deals need immediate attention.", "Check in with both prospects to confirm they're still planning to sign this week — then update Salesforce to reflect their responses.", "Push both close dates out by two weeks to give yourself a realistic runway, then rebuild urgency with the champions.", "Flag both deals to your manager and let them take the lead — end-of-month pressure calls for senior involvement."],
        correct: 0,
        explanation: "Deals in late stage with stale close dates are often stuck on process, not fit. The right questions are operational: is the paper process moving? Is my champion still engaged? Has anything changed on their side? 'Checking in' without answers to these questions doesn't move the deal.",
        resource: { label: "GTM Launch Pad Recording", url: "https://amplitude.zoom.us/clips/share/5RoV2b1DS6SwIHcUWDB__w" }
      },
      {
        id: 10, type: "mc", lo: "LO2",
        text: "What's the Slack channel you should use if you have questions about the GTM Launch Pad or sales run-the-business dashboards?",
        options: ["#global-aes", "#help-legal", "#sales-run-the-business-dashboard", "#competitive"],
        correct: 2,
        explanation: "#sales-run-the-business-dashboard is the designated channel for Launch Pad questions, dashboard navigation, and run-the-business reporting questions.",
        resource: { label: "GTM Launch Pad Slides", url: "https://docs.google.com/presentation/d/1tm_q5TJVRNYRrIB6wc5AGSmqTWyFDi3Na1EwO8tp80M/edit" }
      }
    ]
  },
  {
    id: "day4", day: "Day 4", title: "Prospecting Process", week: "Week 2",
    questions: [
      {
        id: 1, type: "mc", lo: "LO1",
        text: "You have 120 accounts in your territory. To Tailor your prospecting and Take Control of pipeline generation, where do you start?",
        options: ["Start with account selection — use ICP criteria, TOFU intent signals, and territory data to identify the 10–15 accounts most likely in-market now. Spray-and-pray prospecting is the opposite of Tailoring.", "Start with the 20 largest companies by revenue — deal size justifies the prospecting investment and larger accounts respond better to senior AE outreach", "Start with inbound signals — prospects who've already engaged with Amplitude content are always higher priority than cold territory accounts regardless of ICP fit", "Start with accounts where you have a warm introduction — trust-based outreach consistently outperforms cold prospecting and should always anchor your territory plan"],
        correct: 0,
        explanation: "Taking Control of pipeline generation starts with account selection, not outreach. Tailoring requires you to know exactly who you're targeting and why before you write a single message. ICP criteria + TOFU intent signals + territory data gives you a focused list of accounts where your Commercial Insight will land — rather than mass outreach that treats every account the same. Challengers prospect with precision, not volume.",
        resource: { label: "Prospecting Process Slides", url: "https://docs.google.com/presentation/d/12u9LXd4vnyNQrv9d6hB2CjrppGNUYNpxCbFRnFKAJjw/edit" }
      },
      {
        id: 2, type: "mc", lo: "LO2",
        text: "You've sent two emails to a target account over two weeks. No response. A Challenger Takes Control rather than waiting. What's the right move?",
        options: ["Give up and move to the next account — two unanswered emails from an ICP-fit account signals low intent, and time is better spent elsewhere", "Send the same email a third time with a subject line change — sometimes delivery or timing is the issue, not the message itself", "Switch channels. Try LinkedIn, a phone call, or a Reachdesk touch. Multi-channel sequences dramatically outperform single-channel email, and no response to email doesn't mean no interest.", "Wait two more weeks and try once more — some prospects need a longer runway before they're ready to engage with a new vendor"],
        correct: 2,
        explanation: "Taking Control of a prospecting sequence means not letting the process stall when one channel goes quiet. Two unanswered emails is data — it tells you this channel isn't working for this person right now, not that they're not interested. A Challenger switches channels to find where the prospect is accessible: LinkedIn, phone, a personalized gift through Reachdesk. Multi-channel sequences work because they meet prospects where they actually are, not just where it's easiest for you to send.",
        resource: { label: "Prospecting Process Slides", url: "https://docs.google.com/presentation/d/12u9LXd4vnyNQrv9d6hB2CjrppGNUYNpxCbFRnFKAJjw/edit" }
      },
      {
        id: 3, type: "mc", lo: "LO3",
        text: "You want to use Reachdesk to break through at a strategic target account. Before you send, what do you need to know?",
        options: ["Your monthly budget is $350, it resets and doesn't roll over, and gifting must be tracked through Salesforce and Outreach to tie it to pipeline. Additional budget requires a #reachdesk-funds request with your FLM tagged.", "Reachdesk is fully self-serve with no monthly limits — your manager sets an annual budget and you manage spend independently throughout the year", "Each gift requires manager sign-off before it ships, so plan for a 2–3 day approval window before sending anything time-sensitive", "Budget is unlimited for strategic accounts above a certain ARR threshold — gifting at the enterprise tier is treated as a relationship investment, not a tracked expense"],
        correct: 0,
        explanation: "Knowing your tools cold is part of Taking Control of your prospecting motion. $350/month, no rollover, tracked through Salesforce and Outreach — these aren't administrative details, they're the constraints that shape how you deploy Reachdesk strategically. If you blow the budget on low-priority accounts early in the month, you lose the tool when you need it most. And if gifting isn't tracked to pipeline, you can't prove ROI or justify additional budget.",
        resource: { label: "Reachdesk: How to Use to Drive Pipeline", url: "https://docs.google.com/presentation/d/1pScrYlHft9xSNVfbytNvNpJaH0v-gM0W4tsWX_WKxKw/edit" }
      },
      {
        id: 4, type: "tf", lo: "LO2",
        text: "True or False: Your Reachdesk gifting activity is automatically tied to pipeline impact without any additional setup.",
        options: ["True", "False"],
        correct: 1,
        explanation: "False. Reachdesk must be connected to both Salesforce and Outreach — and the Chrome extension installed — before gifting activity is trackable to pipeline. Without this setup, you're spending budget with no way to demonstrate impact. Taking Control of your prospecting tools means knowing how they're configured, not just how to use them.",
        resource: { label: "Reachdesk: How to Use to Drive Pipeline", url: "https://docs.google.com/presentation/d/1pScrYlHft9xSNVfbytNvNpJaH0v-gM0W4tsWX_WKxKw/edit" }
      },
      {
        id: 5, type: "mc", lo: "LO2",
        text: "You're writing a cold email to a Head of Growth at a fintech that just launched a rewards dashboard. A Challenger leads TO their solution — which version of your email does that?",
        options: ["'Hi [Name], I'm reaching out because Amplitude is used by hundreds of growth teams at companies like yours. I'd love 30 minutes to walk you through what we do.'", "'Hi [Name], I noticed you just launched your rewards dashboard. Growth teams at similar fintechs typically hit a wall when they can't tell which features are actually driving activation — and end up building the wrong next thing. Worth 20 minutes to share what we're seeing?'", "'Hi [Name], I wanted to connect and introduce myself. I work with a lot of fintech companies and think there could be a fit. Would you be open to a quick call?'", "'Hi [Name], your rewards dashboard launch caught my attention. We work with companies like yours on product analytics. Are you the right person to speak with about this, or should I reach out to someone else on your team?'"],
        correct: 1,
        explanation: "Option B is a Commercial Teaching cold email — it leads TO Amplitude by starting with a specific trigger (rewards dashboard launch), teaching the prospect something about a cost they may be underestimating (not knowing which features drive activation), and creating Constructive Tension around a real business risk before ever mentioning Amplitude. Options A, C, and D all lead WITH the product or with Amplitude as the subject — exactly what Challenger teaches you not to do. A Tailored, insight-first email that speaks to their specific situation will always outperform a generic intro.",
        resource: { label: "Prospecting Process Slides", url: "https://docs.google.com/presentation/d/12u9LXd4vnyNQrv9d6hB2CjrppGNUYNpxCbFRnFKAJjw/edit" }
      },
      {
        id: 6, type: "mc", lo: "LO3",
        text: "You're using Zoominfo to Tailor your prospecting into Land accounts. What's it most useful for?",
        options: ["Identifying the right contacts — title, email, phone, and org structure — so your outreach reaches actual decision-influencers instead of the wrong person at the right company", "Tracking email engagement and open rates so you know which messages are resonating across your sequence", "Generating Tailored outreach copy based on the prospect's recent news, job postings, and LinkedIn activity automatically", "Flagging which accounts are currently in an active buying cycle based on real-time intent data signals across the web"],
        correct: 0,
        explanation: "Zoominfo is your contact and account intelligence layer — and Tailoring requires knowing exactly who you're reaching before you craft the message. Knowing a company is ICP-fit is only half the equation. Zoominfo tells you which personas exist there, how the org is structured, and who actually has the authority to make or influence the decision. Without that, your Tailored message could be landing with the wrong person entirely.",
        resource: { label: "Zoominfo Handbook", url: "https://docs.google.com/document/d/1i_NmcVSWzjSAwPR3p8RpmC8JBklA6_NL64m73bjsm4o/edit" }
      },
      {
        id: 7, type: "mc", lo: "LO2",
        text: "A prospect replies to your cold email: 'We're not looking at this right now.' A Challenger builds Constructive Tension around timing rather than backing off. What's the right move?",
        options: ["Thank them for the reply and remove them from your sequence — they said no, and respecting that is better than burning the relationship", "Acknowledge the timing, probe what 'not right now' actually means, and set a follow-up tied to when their situation will change. 'Not now' often means 'yes, but later' — and the right response keeps you in the conversation.", "Push back on their framing immediately — a Challenger creates urgency, and letting them defer without tension reinforces that there's no cost to waiting", "Send them a customer story immediately to restart the conversation — concrete proof of value is what moves prospects who say they're not ready"],
        correct: 1,
        explanation: "A Challenger uses Constructive Tension around timing — not by ignoring the objection, but by exploring the assumption behind it. 'Not right now' is a surface statement. What's driving it? A budget cycle? A competing priority? An in-flight evaluation? Asking respectfully surfaces the real situation and lets you Tailor your follow-up to the actual context. A prospect who tells you when they'll be ready is a prospect you can re-engage with precision — that's more valuable than either giving up or pushing aggressively.",
        resource: { label: "Prospecting Process Slides", url: "https://docs.google.com/presentation/d/12u9LXd4vnyNQrv9d6hB2CjrppGNUYNpxCbFRnFKAJjw/edit" }
      },
      {
        id: 8, type: "fill", lo: "LO3",
        text: "To request access to Reachdesk, LinkedIn Sales Navigator, or any other new tool at Amplitude, you go to ________ in the Slack Apps section.",
        correct: ["lumos", "lumos appstore", "lumos app store"],
        placeholder: "name of the tool...",
        explanation: "All software access requests at Amplitude go through Lumos, accessible in the Slack Apps section. Taking Control of your prospecting toolkit means knowing how to get the tools you need — not waiting for someone to provision them for you.",
        resource: { label: "Prospecting Process Slides", url: "https://docs.google.com/presentation/d/12u9LXd4vnyNQrv9d6hB2CjrppGNUYNpxCbFRnFKAJjw/edit" }
      },
      {
        id: 9, type: "mc", lo: "LO3",
        text: "You book a meeting but realize your contact is a strong champion-in-waiting — not the economic buyer. In Challenger terms, how do you diagnose this contact and what do you do?",
        options: ["Cancel the meeting — time spent with someone who can't approve budget slows your sales cycle and should be avoided until the EB is confirmed and available", "Run this contact through the Mobilizer test: do they ask challenging, thought-provoking questions? Do they use 'we' language focused on the organization's interest? If yes, invest in them — a Mobilizer who isn't the EB is still your most valuable asset for getting to one.", "Take the meeting but move quickly to qualify them out — gather what you need and immediately push for an introduction to whoever owns budget before the conversation goes further", "Bring your manager to the meeting — senior presence signals that Amplitude takes the account seriously and may help the contact feel empowered to escalate internally"],
        correct: 1,
        explanation: "This is a classic Mobilizer identification moment. A contact who isn't the economic buyer isn't automatically a Talker — they could be a Mobilizer who has the insight, the motivation, and the organizational access to champion your deal internally. The Challenger diagnostic: do they ask hard questions about your Commercial Insight? Do they think about the organization's good, not just their own? If yes, invest in them deeply. Use the meeting to understand the buying process, help them build the internal case, and develop a powerful request that tests their commitment and influence. Mobilizers are how Challengers get to economic buyers — not by bypassing them.",
        resource: { label: "Discovery Question Repository", url: "https://docs.google.com/document/d/11po0r9LxK_tiooyYb64bdDeqhIhRX_7k-HSlPppf1A4/edit" }
      },
      {
        id: 10, type: "mc", lo: "LO2",
        text: "Multi-touch, multi-channel prospecting is Challenger's Taking Control applied to outreach. What does it actually mean in practice?",
        options: ["Sending the same core message across email, LinkedIn, and phone simultaneously — channel coverage ensures the message reaches the prospect regardless of where they're most active", "Coordinating outreach across channels with timing and content Tailored to each one — email for teaching, LinkedIn for social proof, phone for direct conversation — so each touch adds something new rather than repeating the same ask", "Reaching out to multiple people at the same company in parallel — covering more stakeholders simultaneously increases the likelihood of finding the right contact faster", "Sending a higher volume of messages across more channels — the law of large numbers means more outreach always produces more responses regardless of personalization"],
        correct: 1,
        explanation: "Multi-touch, multi-channel prospecting done the Challenger way is Tailored coordination — not repetition across channels. Each channel has a different context and a different version of your Teaching: email lets you deliver a longer commercial insight; LinkedIn lets you engage around shared content or mutual connections; phone lets you create real-time Constructive Tension. Sending the same message everywhere is just volume. Tailoring the channel and the content to how the prospect consumes information is Taking Control of how your insight lands.",
        resource: { label: "Prospecting Process Slides", url: "https://docs.google.com/presentation/d/12u9LXd4vnyNQrv9d6hB2CjrppGNUYNpxCbFRnFKAJjw/edit" }
      }
    ]
  },
  {
    id: "day5", day: "Day 5", title: "Renewal Operations", week: "Week 2",
    questions: [
      {
        id: 1, type: "mc", lo: "LO2",
        text: "A renewal is 90 days out. You haven't been involved with this account since the deal closed a year ago. What's your first move?",
        options: ["Get involved immediately — review account health, connect with your CSM on adoption and sentiment, and identify risks before they become last-minute surprises at renewal.", "Wait for the Renewals team to initiate — they own the renewal motion and will loop you in when AE involvement is needed.", "Send the customer a renewal proposal now to lock in commercial terms before any risks surface and complicate the negotiation.", "Schedule a QBR with the customer to demonstrate value — a strong business review 90 days out is the most effective renewal motion."],
        correct: 0,
        explanation: "90 days is still time to influence a renewal outcome — but only if you act now. The renewal motion requires AE engagement: understanding account health, aligning with CS, surfacing risks early, and making sure the customer sees the value before a renewal conversation forces the issue.",
        resource: { label: "Customer Engagement Model — Renewal Motion", url: "https://docs.google.com/document/d/1VxMWNbIWWEtJwuhNibKHUCsbOsCQqVFcin8vrZkeKZw/edit" }
      },
      {
        id: 2, type: "mc", lo: "LO2",
        text: "Your customer is up for renewal and pushing for a 30% discount, citing budget pressure. A Challenger doesn't accept the customer's frame at face value. What's the right first move?",
        options: ["Match the discount to protect the renewal — losing a customer costs more than the margin you're giving up", "Understand the root cause before reacting. A discount request is a symptom — is this genuine budget pressure, low adoption, a competitive offer, or a negotiating tactic? Each requires a different response, and jumping to a number before you know the cause gives up leverage you can't get back.", "Hold firm on price and let the customer decide — discounting at renewal sets a precedent that compounds across every future renewal", "Offer a shorter term at the current price — reducing commitment length lowers the financial barrier without touching rate"],
        correct: 1,
        explanation: "Challengers don't accept the customer's stated problem as the real problem — they investigate before responding. A 30% discount request might be a budget crisis, a sign of low adoption (a value problem, not a price problem), a competitive threat, or a negotiating tactic. Each has a completely different correct response. Jumping to a number before you understand the cause is the opposite of Challenger — you're being led by the customer's frame instead of taking control of the conversation.",
        resource: { label: "2026 Sales Policy Handbook (Spekit)", url: "https://app.spekit.co/app/wiki/asset/817909a3-30d8-4b9b-9a35-d8c07150b365?type=asset&expanded=true" }
      },
      {
        id: 3, type: "mc", lo: "LO2",
        text: "Which of the following is NOT your responsibility as an AE in the renewal motion?",
        options: ["Staying informed on account health and risk signals leading into renewal", "Understanding when to involve CS, Renewals, Deal Desk, and Finance", "Unilaterally approving discount structures outside of policy", "Building executive relationships that support renewal conversations"],
        correct: 2,
        explanation: "AEs do not have the authority to approve discount structures outside of Amplitude's policy guardrails — that requires Deal Desk and Finance involvement. Everything else listed is squarely in the AE's renewal responsibility: staying informed, knowing when to involve the right teams, and maintaining executive relationships.",
        resource: { label: "2026 Sales Policy Handbook (Spekit)", url: "https://app.spekit.co/app/wiki/asset/817909a3-30d8-4b9b-9a35-d8c07150b365?type=asset&expanded=true" }
      },
      {
        id: 4, type: "mc", lo: "LO3",
        text: "Your customer has low product adoption at renewal and the CS team flags it as a risk. Applying Challenger thinking, what's the core problem — and what does it tell you about the right response?",
        options: ["Low adoption is a product fit issue — explore whether Amplitude is actually the right tool for their use case before investing in the renewal", "Low adoption is a price problem — customers who aren't using the product won't justify the cost, so flexibility on price is needed to retain them", "Low adoption is a value problem, not a price problem. The right response is to Teach: surface the unrealized outcomes they're missing, deepen the pain of the status quo, and build a path to value. Discounting without addressing adoption just makes a cheaper version of the same risk.", "Low adoption is a CS problem — escalate to the customer success team and let them drive the renewal conversation"],
        correct: 2,
        explanation: "This is the Challenger 'pain of same' concept applied to renewals. The customer's status quo — low adoption, unrealized value — is costing them. Your job is to Teach them what they're leaving on the table and why staying the same is the riskiest option. A discount without a value conversation solves the wrong problem and sets up a worse renewal cycle next year. Lead to your solution (a path to full adoption and realized ROI) — don't lead with a concession.",
        resource: { label: "Renewal Readiness Dashboard (SFDC)", url: "https://amplitude.lightning.force.com/analytics/dashboard/0FKUw0000000eOrOAI" }
      },
      {
        id: 5, type: "mc", lo: "LO1",
        text: "You're shaping a renewal that involves a pricing change, a term extension, and a new product add-on. Which teams do you need to align with?",
        options: ["CS for account health context, Deal Desk for pricing structure and approval, Finance for term and uplift policy, and Legal if terms need updating — renewals with this much complexity are a team sport.", "Just your manager — they have approval authority across all these areas and can coordinate the right people without you needing to manage each relationship directly.", "Deal Desk only — they're the single point of contact for anything involving pricing changes, term extensions, and new product additions.", "CS and Deal Desk — CS owns the customer relationship and Deal Desk owns the commercial structure. Finance and Legal only need to be involved at signature."],
        correct: 0,
        explanation: "A renewal with pricing changes, term extensions, and new products touches multiple teams. CS owns adoption context, Deal Desk owns quoting and pricing approval, Finance owns policy guardrails, and Legal may need to weigh in on term modifications. Missing any of these creates delays or surprises at the finish line.",
        resource: { label: "Customer Engagement Model — Renewal Motion", url: "https://docs.google.com/document/d/1VxMWNbIWWEtJwuhNibKHUCsbOsCQqVFcin8vrZkeKZw/edit" }
      },
      {
        id: 6, type: "mc", lo: "LO3",
        text: "Your champion just left and their replacement emails asking to 'evaluate whether to continue with Amplitude.' Your CSM says usage is healthy. How does a Challenger frame this situation?",
        options: ["Healthy usage is your best asset — send the new stakeholder a usage report and let the data make the case", "This is a Mobilizer identification moment. The new stakeholder hasn't been Taught the value narrative — they're evaluating from a blank slate. Engage immediately, treat it like a new sale, and find out whether they're a potential Mobilizer who can champion renewal, or someone you need to navigate carefully.", "This is a CS responsibility — your role is new business, and the renewal relationship should be fully owned by the customer success team", "Prepare a renewal discount offer in advance — new stakeholders often use transitions as negotiating leverage, so getting ahead of it signals good faith"],
        correct: 1,
        explanation: "A new stakeholder is an unqualified contact until you run them through the Challenger lens: are they a Mobilizer who'll champion the renewal internally, a Talker who's friendly but can't drive decisions, or a Blocker who'll use the transition to stall or replace you? Healthy usage data doesn't answer that question. You need to engage, Teach the value narrative, and figure out who you're dealing with — fast. Waiting lets them form their own frame without your input.",
        resource: { label: "Customer Engagement Model — Renewal Motion", url: "https://docs.google.com/document/d/1VxMWNbIWWEtJwuhNibKHUCsbOsCQqVFcin8vrZkeKZw/edit" }
      },
      {
        id: 7, type: "mc", lo: "LO3",
        text: "Where do you go to track the current status of upcoming renewals in your territory?",
        options: ["The Renewal Readiness Dashboard in Salesforce — it shows renewal stage, health signals, and upcoming milestones across your book of business.", "Your CSM's customer health scorecards — they track product usage, support cases, and NPS data that's more current than any Salesforce dashboard.", "Your own Salesforce opportunity list filtered by close date — that's the most direct view of what's expiring and when.", "The Sales Operating Cadence in Spekit — it maps renewal timelines and required milestones for each stage of the renewal process."],
        correct: 0,
        explanation: "The Renewal Readiness Dashboard in Salesforce is the tool for tracking renewal status, health, and upcoming milestones. It gives you the data to stay ahead of renewals rather than reacting to them when the contract expiration date arrives.",
        resource: { label: "Renewal Readiness Dashboard (SFDC)", url: "https://amplitude.lightning.force.com/analytics/dashboard/0FKUw0000000eOrOAI" }
      },
      {
        id: 8, type: "fill", lo: "LO2",
        text: "The term for the discounting, term, and uplift guidelines AEs must work within when structuring renewals is ________.",
        correct: ["guardrails", "guardrails and policies", "renewal guardrails", "pricing guardrails", "policies"],
        placeholder: "what are these constraints called...",
        explanation: "Guardrails are the policy constraints governing discount levels, term structures, and uplift expectations for renewals. AEs must work within these — not around them. Anything outside guardrails requires Deal Desk and Finance approval.",
        resource: { label: "2026 Sales Policy Handbook (Spekit)", url: "https://app.spekit.co/app/wiki/asset/817909a3-30d8-4b9b-9a35-d8c07150b365?type=asset&expanded=true" }
      },
      {
        id: 9, type: "mc", lo: "LO2",
        text: "A CSM flags that a customer is at risk — low feature adoption, no executive sponsor, and they're evaluating a competitor. Renewal is in 60 days. What's your priority action?",
        options: ["Discount the renewal aggressively — price is clearly the main issue here", "Get on a call with your CSM to build a joint save plan: identify the root cause, find an executive you can engage, build a value case around unrealized potential, and loop in leadership. 60 days is workable if you start now.", "Let the Renewals team own the save — AEs shouldn't be involved in at-risk accounts this close to expiry", "Send a strong case study and schedule a product walk-through to re-demonstrate value"],
        correct: 1,
        explanation: "A multi-risk account at 60 days requires urgent, coordinated action. The AE-CSM partnership is central here — you own the commercial relationship, they own the product relationship. Together you build the save plan: address adoption, executive access, and competitive positioning in parallel, not sequentially.",
        resource: { label: "Customer Engagement Model — Renewal Motion", url: "https://docs.google.com/document/d/1VxMWNbIWWEtJwuhNibKHUCsbOsCQqVFcin8vrZkeKZw/edit" }
      },
      {
        id: 10, type: "mc", lo: "LO3",
        text: "Renewal pricing changes, uplift expectations, and multi-year term structures are governed by policy. Where do you go when you need to understand or reference these policies?",
        options: ["The 2026 Sales Policy Handbook in Spekit — it documents Amplitude's renewal pricing guardrails, discount levels, uplift expectations, and term policies.", "Your most recent Deal Desk approval email — it reflects the most current version of what's been approved in practice, not just what policy says.", "Your manager — they've navigated dozens of renewals and can tell you what's been approved before without you having to read the full handbook.", "The customer's original contract — it establishes the pricing baseline and any committed terms that carry over into the renewal structure."],
        correct: 0,
        explanation: "The 2026 Sales Policy Handbook in Spekit is the authoritative source for renewal pricing and policy guardrails. It's what you reference when structuring a renewal to make sure you're within bounds before engaging Deal Desk for approval.",
        resource: { label: "2026 Sales Policy Handbook (Spekit)", url: "https://app.spekit.co/app/wiki/asset/817909a3-30d8-4b9b-9a35-d8c07150b365?type=asset&expanded=true" }
      }
    ]
  }
];