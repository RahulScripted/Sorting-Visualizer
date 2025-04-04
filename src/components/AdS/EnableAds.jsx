import { useEffect } from "react";

export default function AdBox() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Ads error", e);
    }
  }, []);

  return (
    <ins className="adsbygoogle"
      style={{ display: "block", textAlign: "center" }}
      data-ad-client="ca-pub-2879437040112935"
      data-ad-slot="1234567890"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins>
  );
}