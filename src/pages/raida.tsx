import { useState, type FormEvent, type ReactNode } from "react";
import Layout from "@theme/Layout";
import styles from "./raida.module.css";

type Message = {
  id: number;
  role: "raida" | "visitor";
  text: string;
};

const starters = [
  "How do I join the Guild?",
  "Where can I find a Raid?",
  "What is a Tip of the Spear?",
];

const initialMessages: Message[] = [
  {
    id: 1,
    role: "raida",
    text: "Well met. I’m Raida. Ask me where to start, how the Guild works, or where a piece of lore lives.",
  },
];

function mockReply(question: string): string {
  const normalized = question.toLowerCase();

  if (normalized.includes("join") || normalized.includes("member")) {
    return "Start with a Portal profile and Discord, then signal interest in a monthly cohort. I’d point you to the membership path and cite the exact handbook sections behind that answer.";
  }

  if (normalized.includes("raid") || normalized.includes("work")) {
    return "Raid opportunities move through the Agency area in Discord. I’d help you understand the party roles, find the current availability path, and keep client-shared Camps distinct from internal Raid channels.";
  }

  if (normalized.includes("spear") || normalized.includes("ai")) {
    return "A Tip of the Spear is a specialized practice inside RaidGuild. Applied AI and Onchain work can develop focused expertise while sharing the Guild’s network, reputation, legal rails, and operating knowledge.";
  }

  return "In the connected experience, I’d search approved Guild sources, show where the answer came from, and make clear when something needs a steward or member decision.";
}

export default function RaidaPage(): ReactNode {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [draft, setDraft] = useState("");

  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const question = draft.trim();

    if (!question) return;

    const visitorMessage: Message = {
      id: Date.now(),
      role: "visitor",
      text: question,
    };
    const raidaMessage: Message = {
      id: Date.now() + 1,
      role: "raida",
      text: mockReply(question),
    };

    setMessages((current) => [...current, visitorMessage, raidaMessage]);
    setDraft("");
  }

  return (
    <Layout
      title="Chat with Raida"
      description="A concept for conversational access to RaidGuild knowledge."
    >
      <main className={styles.page}>
        <div className={`container ${styles.intro}`}>
          <p className={styles.kicker}>Queen Raida · Concept prototype</p>
          <h1>A conversation with the Guild’s memory.</h1>
          <p>
            Imagine asking the handbook a question and getting a useful answer
            with the source, context, and next door already attached.
          </p>
        </div>

        <div className={`container ${styles.workspace}`}>
          <aside className={styles.contextPanel}>
            <p className={styles.panelLabel}>What Raida can become</p>
            <ol>
              <li>
                <span>01</span>
                <div>
                  <h2>Guide</h2>
                  <p>Find the right page, place, person, or current process.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h2>Trace</h2>
                  <p>Show which approved source supports an answer.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h2>Act carefully</h2>
                  <p>Use scoped workflows only when permissions allow it.</p>
                </div>
              </li>
            </ol>
            <div className={styles.prototypeNote}>
              <span aria-hidden="true">✦</span>
              <p>
                This prototype runs entirely in your browser. Nothing is sent or
                saved.
              </p>
            </div>
          </aside>

          <section className={styles.chat} aria-labelledby="chat-title">
            <header className={styles.chatHeader}>
              <div>
                <span className={styles.online} aria-hidden="true" />
                <div>
                  <h2 id="chat-title">Chat with Raida</h2>
                  <p>Handbook guide · Preview mode</p>
                </div>
              </div>
              <span className={styles.previewBadge}>Mock</span>
            </header>

            <div className={styles.messages} aria-live="polite">
              {messages.map((message) => (
                <div
                  className={`${styles.message} ${
                    message.role === "visitor"
                      ? styles.visitorMessage
                      : styles.raidaMessage
                  }`}
                  key={message.id}
                >
                  <span>{message.role === "raida" ? "Raida" : "You"}</span>
                  <p>{message.text}</p>
                </div>
              ))}
            </div>

            <div className={styles.starters} aria-label="Suggested questions">
              {starters.map((starter) => (
                <button
                  type="button"
                  key={starter}
                  onClick={() => setDraft(starter)}
                >
                  {starter}
                </button>
              ))}
            </div>

            <form className={styles.composer} onSubmit={sendMessage}>
              <label htmlFor="raida-question">Ask the Guild</label>
              <div>
                <input
                  id="raida-question"
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  placeholder="Where should I start?"
                  autoComplete="off"
                />
                <button type="submit" disabled={!draft.trim()}>
                  Send <span aria-hidden="true">↗</span>
                </button>
              </div>
            </form>
          </section>
        </div>
      </main>
    </Layout>
  );
}
