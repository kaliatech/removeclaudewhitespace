import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Remove Line Numbers From Code — Free Online Tool",
  description:
    "Strip line numbers from code copied from Claude Code, GitHub, terminal cat -n output, or any rendered viewer. Free, client-side, instant.",
  openGraph: {
    title: "Remove Line Numbers From Code",
    description: "Strip line-number prefixes from copied code in one paste.",
  },
};

export default function Page() {
  return (
    <ContentPage
      eyebrow="Tool"
      title="Remove line numbers from copied code"
      intro="Pasting from Claude Code's Read tool, GitHub's blob view, or a cat -n dump leaves line numbers stuck to every line. Strip them in seconds."
      crumbs={[
        { name: "Home", href: "/" },
        { name: "Remove line numbers", href: "/remove-line-numbers-from-code" },
      ]}
    >
      <h2>The formats this tool handles</h2>
      <ul>
        <li>
          <strong>Tab-prefixed</strong>: <code>1\t</code>, <code>42\t</code>{" "}
          — the format Claude Code&apos;s Read tool uses (the same as{" "}
          <code>cat -n</code>).
        </li>
        <li>
          <strong>Pipe-delimited</strong>: <code>1│</code>, <code>42 │</code>{" "}
          — common in syntax-highlighted code viewers and tools like{" "}
          <code>bat</code>.
        </li>
        <li>
          <strong>Bracketed</strong>: <code>[42]</code>, <code>(42)</code>{" "}
          — found in some doc tools and traceback formats.
        </li>
        <li>
          <strong>GitHub-style</strong>: leading numbers from copy-paste of
          the diff or blob viewer.
        </li>
      </ul>

      <h2>How it works</h2>
      <p>
        The cleaner runs two passes per line. The first looks for{" "}
        <code>{"^\\s*\\d{1,5}\\t"}</code> — up to five digits followed by a
        tab — which catches the Read tool format. The second looks for
        <code>{"^\\s*\\d{1,5}\\s*[│|>:]"}</code> — digits followed by a
        gutter character — which catches every common pipe variant. Both
        patterns require the line number to be at the very start, so genuine
        numbers in your code are never touched.
      </p>

      <h2>What it doesn&apos;t do</h2>
      <p>
        It won&apos;t strip numeric prefixes that aren&apos;t followed by a
        gutter character (so a line like <code>42 is the answer</code> stays
        intact). It won&apos;t touch numbers in the middle of a line.
      </p>

      <h2>Tip: pair with indent normalisation</h2>
      <p>
        Line-numbered output is almost always indented at the gutter — when
        you strip the numbers, the leading whitespace lingers. The{" "}
        <strong>Indent</strong> toggle (on by default) detects and removes
        the common leading indent so your code lands flush in your editor.
      </p>
    </ContentPage>
  );
}
