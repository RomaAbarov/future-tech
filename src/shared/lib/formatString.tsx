export default function formatString(str: string) {
  return str.split("/n").map((s) => <p>{s}</p>);
}
