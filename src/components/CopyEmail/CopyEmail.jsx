import { useCallback, useEffect, useRef, useState } from "react";
import emailIcon from "../../assets/email.svg";

export default function CopyEmail({ email }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = email;
      ta.setAttribute("readonly", "");
      ta.style.position = "absolute";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 2000);
  }, [email]);

  return (
    <button
      type="button"
      className={`copy-email${copied ? " is-copied" : ""}`}
      onClick={copy}
      aria-label={
        copied ? "Email address copied" : `Copy email address ${email}`
      }
    >
      <span className="copy-email-line copy-email-address" aria-hidden="true">
        <img src={emailIcon} alt="Email Icon" />
        <span>Send me an email</span>
      </span>
      <span className="copy-email-line copy-email-confirm" aria-hidden="true">
        Email copied&nbsp;✓
      </span>
      <span className="sr-only" role="status">
        {copied ? "Email address copied to clipboard" : ""}
      </span>
    </button>
  );
}
