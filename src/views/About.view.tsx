import { Image } from "react-bootstrap";

import bannerLogo from "@assets/bannerLogo.png";

export default function About() {
    return (
        <>
            <article className="bg-body-tertiary fs-3 d-flex flex-column align-items-center">
                <section className="m-4">
                    יחד עם צוות מנצח מיומן בעל ניסיון וידע בתחום הנדל"ן <span className="fw-semibold">ST</span> נדל"ן <span className="fw-semibold">VIP</span> מיוחד בגישה העסקית שלה עם יחס אישי <span className="fw-semibold">"VIP"</span>. בשילוב של ניסיון, ידע וקשרים עסקיים רחבים אתם תקבלו תוצאות מוצלחות ומהירות.
                </section>
                <section className="m-4">
                    בראש החברה עומדת אסתי עמר, אשר לזכותה ניסיון רב משנת <span className="fw-semibold">2008</span> בתחום הנדל"ן המסחרי עם דגש בשוק:המשרדים, קליניקות, חנויות, אולמות תצוגה, מסעדות ובתי קפה.
                </section>
                <section className="m-4">
                    מנצח מיומן בעל ניסיון וידע בתחום הנדל"ן <span className="fw-semibold">ST</span> נדל"ן <span className="fw-semibold">VIP</span> מיוחד בגישה העסקית שלה עם יחס אישי "VIP".בשילוב של ניסיון, ידע וקשרים עסקיים רחבים אתם תקבלו תוצאות מוצלחות ומהירות.
                </section>
                <Image className="m-4" src={bannerLogo} height="25%" width="25%" />
            </article >
        </>
    )
}