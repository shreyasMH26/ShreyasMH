import { IDCardLanyard } from "@/components/ui/id-card-lanyard";

export default function IDCardLanyardDemo() {
  return (
    <IDCardLanyard
      name="Shreyas MH"
      role="Co-Founder & COO @ XTICH"
      brand="XTICH"
      brandTagline="Apparel & Systems"
      pillars={["Design", "Code", "Ship"]}
      location="Davanagere, India"
      idNumber="SMH-2026"
      validThru="12/2029"
      site="shreyasmh.in"
      avatarUrl="/photos/shreyas-editorial-bw.jpg"
      githubUrl="https://github.com/shreyasMH26"
      linkedinUrl="https://www.linkedin.com/in/shreyasmh/"
      instagramUrl="https://www.instagram.com/shreyasm.h/"
      twitterUrl="https://x.com/shreyasMH26"
    />
  );
}
