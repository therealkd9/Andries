# The Operator

Andries' digital employee. Built to land the first B2B clients for backend
automation and drive toward **$8–10k/month**.

## What's here
| File | What it is |
|---|---|
| [`charter.md`](charter.md) | The Operator's identity, principles, and daily/weekly loop. |
| [`pipeline.md`](pipeline.md) | The lead tracker — single source of truth for the business. |
| [`knowledge/offer.md`](knowledge/offer.md) | The offer (v1 draft — **react to this**). |
| [`knowledge/icp.md`](knowledge/icp.md) | Who to target and who to skip. |
| [`knowledge/outreach-templates.md`](knowledge/outreach-templates.md) | Email/DM/phone scripts. |
| [`knowledge/objections.md`](knowledge/objections.md) | How to handle pushback. |
| [`SETUP-WINDOWS.md`](SETUP-WINDOWS.md) | Install Claude Code on Windows and wake it up. |

Specialist sub-agents live in [`../.claude/agents/`](../.claude/agents/):
`prospect-researcher`, `sales-rep`, `offer-strategist`.

## How it comes alive
The Operator runs as **Claude Code** on your Windows PC, in this repo. Root
`CLAUDE.md` makes any Claude Code session here adopt the Operator role with full
context. Follow `SETUP-WINDOWS.md` to set it up.

## The flow
1. **You** lock the open offer decisions (`knowledge/offer.md`).
2. **prospect-researcher** fills the funnel with qualified leads → `pipeline.md`.
3. **sales-rep** drafts personalized outreach and handles replies → booked calls.
4. **You** take the calls and close. The Operator preps you for each one.
5. **offer-strategist** sharpens the offer from what you hear in the market.

Repeat until the calendar fills and the first clients sign.
