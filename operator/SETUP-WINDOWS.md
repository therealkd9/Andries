# Bring the Operator Alive — Windows Setup

This installs **Claude Code** on your Windows PC and points it at this repo. Once
done, running `claude` in the project folder wakes the Operator up with all its
context (the charter, offer, pipeline, and sub-agents).

Do this once. ~15–20 minutes.

---

## 1. Install Git
- Download **Git for Windows**: https://git-scm.com/download/win
- Run the installer and click through with the defaults.
- This lets you download (clone) the Andries repo and keep it in sync.

## 2. Install Node.js (this is what Claude Code runs on)
- Download the **LTS** version: https://nodejs.org/
- Run the installer, accept defaults.
- To confirm it worked: open **PowerShell** (Start menu → type "PowerShell") and run:
  ```
  node --version
  ```
  You should see a version number (v20 or higher).

## 3. Install Claude Code
In PowerShell:
```
npm install -g @anthropic-ai/claude-code
```
Confirm it installed:
```
claude --version
```

## 4. Get the Andries repo onto your PC
In PowerShell, choose where to keep it (Documents is fine):
```
cd ~\Documents
git clone https://github.com/therealkd9/Andries.git
cd Andries
```

## 5. Wake the Operator up
Still in the `Andries` folder:
```
claude
```
- The first time, it'll ask you to **sign in** — use your Claude account
  (a Claude Pro or Max subscription is the simplest; an API key also works).
- Once you're in, Claude Code automatically reads `CLAUDE.md` and **becomes the
  Operator**. It already knows the mission, the offer, and your pipeline.

## 6. Your first command to the Operator
Paste this:
```
You're the Operator. Read your charter and the offer. Then: (1) tell me what you'd
change about the offer/niche, and (2) give me today's top 3 actions to land our
first client.
```

That's it — you now have an employee.

---

## Keeping it in sync
The Operator's brain lives in this repo (which I update from my side too). To pull
the latest before a work session:
```
git pull
```
And when the Operator updates the pipeline or offer, save your work back up:
```
git add -A
git commit -m "pipeline update"
git push
```
(The Operator can run these for you — just ask it to "save and push.")

## If something breaks
- `npm install` errors → close and reopen PowerShell as **Administrator**, try again.
- `claude` not found → restart PowerShell so it picks up the new install.
- Stuck? Take a screenshot of the error and bring it back to this chat.

## What's next after setup
Once the Operator is running on your PC, it can do real work: research leads,
draft outreach, handle replies, and (with your okay) operate the browser and tools
to actually get things done. We'll add the "build the automations you sell" engine
once the first calls are booked.
