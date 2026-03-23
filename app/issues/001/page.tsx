import type { Metadata } from "next";
import Link from "next/link";
import SubscribeModal from "../../components/SubscribeModal";

export const metadata: Metadata = {
  title: "Anduril and the Future of War — Profiles of the Future",
  description:
    "Nine years ago, Anduril didn't exist. A few weeks ago, the U.S. Army awarded the company a single contract worth up to $20 billion. This is the story of how it was built.",
  openGraph: {
    title: "Anduril and the Future of War",
    description:
      "Nine years ago, Anduril didn't exist. A few weeks ago, the U.S. Army awarded the company a single contract worth up to $20 billion. This is the story of how it was built.",
    type: "article",
    images: [
      {
        url: "/images/001/roadrunner.webp",
        alt: "A Roadrunner and Anduril founder Palmer Luckey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anduril and the Future of War",
    description:
      "Nine years ago, Anduril didn't exist. A few weeks ago, the U.S. Army awarded the company a single contract worth up to $20 billion.",
    images: ["/images/001/roadrunner.webp"],
  },
};

export default function Article() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "#e8e4de",
        fontFamily: "'Georgia', 'Times New Roman', serif",
        position: "relative",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* Grain overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
          pointerEvents: "none",
          zIndex: 100,
        }}
      />

      {/* Nav */}
      <nav
        className="nav"
        style={{ position: "sticky", top: 0, background: "#0a0a0a", zIndex: 50 }}
      >
        <div className="nav-brand">
          <Link
            href="/"
            style={{ textDecoration: "none" }}
          >
            <span
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 20,
                fontWeight: 600,
                letterSpacing: "0.02em",
                color: "#e8e4de",
              }}
            >
              Profiles of the Future
            </span>
          </Link>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#c4956a",
              borderLeft: "1px solid rgba(232,228,222,0.15)",
              paddingLeft: 16,
            }}
          >
            by a16z
          </span>
        </div>
        <div className="nav-links">
          {[
            { label: "About", href: "/about" },
            { label: "Films", href: "/films" },
            { label: "Podcast", href: "/podcast" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: "0.08em",
                color: "rgba(232,228,222,0.4)",
                cursor: "pointer",
                transition: "color 0.3s ease",
                textDecoration: "none",
              }}
            >
              {item.label}
            </Link>
          ))}
          <SubscribeModal />
        </div>
      </nav>

      {/* Article */}
      <article className="article-container">
        {/* Header */}
        <header className="article-header">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 32,
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#c4956a",
              }}
            >
              Issue 001
            </span>
            <div
              style={{
                height: 1,
                width: 48,
                background: "linear-gradient(90deg, #c4956a, transparent)",
              }}
            />
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 10,
                fontWeight: 400,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(232,228,222,0.3)",
              }}
            >
              Defense · American Dynamism
            </span>
          </div>

          <h1 className="article-title">
            Anduril and the
            <br />
            Future of War
          </h1>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 19,
              fontStyle: "italic",
              lineHeight: 1.6,
              color: "rgba(232,228,222,0.45)",
              margin: 0,
              marginBottom: 32,
              maxWidth: 620,
            }}
          >
            Profiles of the Future is a weekly series on the companies reshaping
            civilization. Each profile tells the story of how they were built —
            the first product, the first customer, the decisions that compounded
            — and maps the opportunities opening up for the founders who want to
            build with them.
          </p>

          <div className="byline" style={{ marginBottom: 48 }}>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                fontWeight: 400,
                color: "rgba(232,228,222,0.5)",
              }}
            >
              March 2026
            </span>
            <span
              style={{
                width: 3,
                height: 3,
                borderRadius: "50%",
                background: "rgba(232,228,222,0.2)",
              }}
            />
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                fontWeight: 400,
                color: "rgba(232,228,222,0.5)",
              }}
            >
              18 min read
            </span>
            <span
              style={{
                width: 3,
                height: 3,
                borderRadius: "50%",
                background: "rgba(232,228,222,0.2)",
              }}
            />
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                fontWeight: 400,
                color: "rgba(232,228,222,0.35)",
                fontStyle: "italic",
              }}
            >
              Featuring Palmer Luckey & Katherine Boyle
            </span>
          </div>
        </header>

        {/* Article body */}
        <div className="article-body">
          {/* Hero image — Roadrunner + Palmer Luckey */}
          <figure className="article-figure">
            <img
              src="/images/001/roadrunner.webp"
              alt="A Roadrunner and Anduril founder Palmer Luckey"
              className="article-image"
            />
            <figcaption className="article-caption">
              A Roadrunner and Anduril founder Palmer Luckey
            </figcaption>
          </figure>

          <p>
            Everything Palmer Luckey has built was first described in science
            fiction. Neal Stephenson&apos;s <em>Snow Crash</em> was published in
            1992 — twenty years before a teenage Luckey assembled the first
            prototype of the Oculus Rift in a camper trailer parked in the
            driveway of his parents&apos; duplex in Long Beach, California.
            Lattice, the AI platform that coordinates every weapon Anduril makes,
            was inspired by Laplace&apos;s demon: an 1814 thought experiment
            about an intelligence that could predict the entire future of the
            universe if it knew the position and velocity of every atom.
          </p>
          <p>
            The company itself is named after Aragorn&apos;s sword in{" "}
            <em>The Lord of the Rings</em>, and in Tolkien&apos;s Elvish,
            Andúril means &ldquo;Flame of the West.&rdquo; Nine years ago,
            Anduril didn&apos;t exist. A few weeks ago, the U.S. Army awarded
            the company a single contract worth up to $20 billion.
          </p>
          <p>This is the story of how it was built.</p>

          <h2>America Doesn&apos;t Have Enough Stuff</h2>
          <p>
            Over decades, the American defense industrial base has calcified into
            a system that produces fewer weapons at greater cost on longer
            timelines. The F-35 program started in 2001, has consumed over $400
            billion, and didn&apos;t achieve full-rate production until 2024. The
            Columbia-class submarine is years late and billions over budget. The
            Army&apos;s Future Combat Systems program burned through $18 billion
            before being canceled in 2009; its successor has been canceled and
            restarted twice more under two different names.
          </p>
          <p>
            Chris Brose, Anduril&apos;s Chief Strategy Officer and a former
            staff director of the Senate Armed Services Committee, spent years
            watching this from the inside. &ldquo;The fundamental issue is that
            the U.S. has gotten trapped in a model of building small numbers of
            exquisite, incredibly expensive platforms over incredibly long
            timelines,&rdquo; he says. &ldquo;And the result is that America
            doesn&apos;t have enough stuff.&rdquo;
          </p>
          <p>
            Today&apos;s procurement system traces back to World War II. The
            government had to convert automotive and industrial factories into
            weapons production overnight, but nationalizing them was politically
            impossible. So they settled on cost-plus contracting: the government
            would pay manufacturers whatever it cost to build the weapons, plus a
            fixed margin on top. If Ford had never built a tank before, they
            didn&apos;t need to guess at a price. The government would cover
            whatever it cost and guarantee a return. That was a reasonable way to
            mobilize an industrial base in the middle of a fight for national
            survival, but the system was never dismantled. After the war, Robert
            McNamara (who had been president of Ford Motor Company) became
            Kennedy&apos;s Secretary of Defense and formalized the wartime
            procurement model into permanent policy. The result, as the historian
            Charles Ries observed, was &ldquo;almost socialist in its
            metaphysics.&rdquo; The system designed for wartime emergency became
            the permanent way America buys weapons: a small number of planners at
            the top decide what gets built, how much it costs, and how long it
            takes.
          </p>

          {/* Ford Highland Park plant */}
          <figure className="article-figure">
            <img
              src="/images/001/tank.avif"
              alt="Workers at Ford's Highland Park plant assemble M10A1 tank destroyers in 1943"
              className="article-image"
            />
            <figcaption className="article-caption">
              Workers at Ford&apos;s Highland Park plant assemble M10A1 tank
              destroyers in 1943. Between 1942 and 1943, Ford pivoted from
              civilian automobiles to heavy armor, producing 1,038 units
              utilizing mass-production techniques originally perfected for the
              automotive industry.
            </figcaption>
          </figure>

          <p>
            The defense primes (Lockheed, Boeing, Raytheon, Northrop Grumman,
            General Dynamics) are large organizations full of talented people
            operating rationally inside a broken incentive structure. Go over
            budget and you earn more; finish early and you have nothing left to
            bill for. The result is that the companies building America&apos;s
            weapons have no incentive to rethink what they&apos;re building.
            They&apos;re only incentivized to build more of it, more slowly, at
            greater cost. As Palantir CEO Alex Karp writes in{" "}
            <em>The Technological Republic</em>: &ldquo;Our entire defense
            establishment and military procurement complex were built to supply
            soldiers for a type of war — on grand battlefields and with clashes
            of masses of humans — that may never again be fought. This next era
            of conflict will be won or lost with software.&rdquo;
          </p>

          <h2>The Fellowship of the Flame</h2>

          {/* Founders photo */}
          <figure className="article-figure">
            <img
              src="/images/001/founders.webp"
              alt="Anduril founders from left to right: Joseph Chen, Brian Schimpf, Palmer Luckey, Trae Stephens, Matt Grimm"
              className="article-image"
            />
            <figcaption className="article-caption">
              Anduril founders from left to right: Joseph Chen, Brian Schimpf,
              Palmer Luckey, Trae Stephens, Matt Grimm
            </figcaption>
          </figure>

          <p>
            As a kid, Palmer Luckey&apos;s hero was Seto Kaiba from{" "}
            <em>Yu-Gi-Oh!</em> – an orphan who inherits a weapons manufacturing
            empire and uses the money to build virtual reality games. He keeps a
            Kaiba figurine on his office mantel. Luckey&apos;s career followed
            the same arc in reverse: he built a virtual reality empire, then
            turned to weapons.
          </p>
          <p>
            Luckey sold Oculus to Facebook for $2 billion at twenty-two. Two
            years later, Facebook fired him over a $9,000 donation to a
            pro-Trump political group (though the company has always denied it).
            He left Silicon Valley with hundreds of millions of dollars and a
            chip on his shoulder. &ldquo;My gears were ground,&rdquo; he told{" "}
            <em>60 Minutes</em>. &ldquo;I really wanted to prove that I was
            somebody, that I was not a one-hit wonder, and that I still had it in
            me to do big things.&rdquo;
          </p>
          <p>
            Trae Stephens, a partner at Founders Fund who had worked at Palantir
            and led the DoD transition team, had been developing a thesis on the
            broken state of defense contracting for years. He pitched Luckey on
            the idea of a modern defense company as early as 2014, but Luckey was
            still committed to VR. When Facebook pushed Luckey out, he
            reconnected with Stephens. They put together a bare-bones pitch deck
            and presented it to a handpicked group of top engineers from
            Palantir, SpaceX, Tesla, and Oculus. Nearly all of Anduril&apos;s
            first dozen employees came from that room. But they still needed a
            CEO, and Stephens had the perfect candidate in mind.
          </p>
          <p>
            Brian Schimpf was the Director of Engineering at Palantir, where he
            led hundreds of engineers building the company&apos;s commercial
            software platform. He and Matt Grimm – another Palantir engineer who
            would become an Anduril co-founder – had been close friends since
            their undergraduate days at Cornell, where they built an autonomous
            vehicle together for the DARPA Grand Challenge and drove it through
            the Mojave Desert in 2005, years before self-driving cars were a
            Silicon Valley obsession. &ldquo;I was absolutely convinced from day
            one that Brian needed to be the CEO of the company,&rdquo; Stephens
            would later say. &ldquo;There was no alternative.&rdquo;
          </p>
          <p>
            Schimpf took some convincing. He was running engineering at Palantir,
            a company worth $20 billion at the time that was reshaping how the
            CIA and military used software. But the pitch was hard to resist: the
            most ambitious idea, the best founding team, and the best funding
            story you could possibly assemble. &ldquo;There&apos;s no bigger
            swing,&rdquo; Schimpf told <em>Arena Magazine</em>.
          </p>
          <p>
            They recruited Grimm and Joe Chen (one of the first engineers at
            Oculus) and called the company Anduril Industries. As Luckey likes to
            point out: a Tesla has better AI than any U.S. military aircraft, and
            a Roomba has better autonomous navigation than most Pentagon weapons
            systems. The consumer tech industry had spent twenty years building
            every component a modern weapon needs – machine learning, computer
            vision, sensor fusion, mesh networking – and nobody with venture
            funding had tried to assemble those pieces into actual weapons and
            sell them as finished products. Anduril would be the first.
          </p>

          <h2>The First Tower</h2>
          <p>
            Anduril was incorporated in June 2017. That same month, Luckey and
            his team pitched Customs and Border Protection (CBP) on autonomous
            surveillance. At the time, CBP used cameras, radars, and several
            agents sitting behind video screens with joysticks. It was easy to
            miss things and very manpower-intensive. Anduril&apos;s offer was
            different from anything CBP was used to hearing: Anduril would build
            the system on its own dime, and CBP could test without committing
            taxpayer money to a decade-long development program. &ldquo;The
            problem,&rdquo; Luckey has said, &ldquo;is that they say, &lsquo;How
            can we develop this product in such a way that congressmen can&apos;t
            vote to kill it?&rsquo; And our answer is: Don&apos;t rely on money
            from congressmen to get the thing built. Use your own money.&rdquo;
          </p>
          <p>
            Within a year, they built their first product: a 33-foot,
            solar-powered surveillance tower that uses computer vision to
            autonomously detect and classify people, vehicles, and drones, then
            alerts agents in real time. It fits in a pickup truck and assembles
            in under two hours.
          </p>

          {/* Sentry Tower */}
          <figure className="article-figure">
            <img
              src="/images/001/towers.webp"
              alt="Anduril Sentry Tower"
              className="article-image"
            />
            <figcaption className="article-caption">
              Anduril Sentry Tower
            </figcaption>
          </figure>

          <p>
            Brian Schimpf wrote much of the software himself. In his first weeks
            as CEO, he was driving ATVs through mud in the high desert north of
            Los Angeles to test the towers personally. &ldquo;The CEO was not
            above driving an ATV in the mud to get to the tower to do the
            tests,&rdquo; said Jason Levin, Anduril&apos;s SVP of Engineering.
            &ldquo;Nothing&apos;s above or below anybody.&rdquo; That culture
            became foundational.
          </p>
          <p>
            They tested the tower on a rancher&apos;s land in Texas, and in its
            first twelve days of operation, it led to 55 apprehensions.
          </p>
          <p>
            CBP bought four towers. Then thirty. Then two hundred. By late 2024,
            Anduril had deployed its 300th tower along the southern border. The
            contract grew to $250 million, and the Sentry Tower became a CBP
            program of record — the agency&apos;s formal commitment to it as a
            long-term capability. Becoming a full-scale program of record in
            three years was one of the fastest case studies in federal government
            history. The Marines followed, deploying Sentry towers at
            installations in Arizona, Japan, and Hawaii. The UK Ministry of
            Defence deployed them at bases in Cyprus. Oil and gas facilities and
            nuclear power plants bought them for perimeter surveillance. A
            product built to watch the border turned out to be a product the
            entire national security apparatus needed.
          </p>

          <h2>The Lattice Flywheel</h2>
          <p>
            Their second system took a similar path to production. They observed
            that most counter-drone technology at the time relied on jamming or
            intercepting communications, which would stop working as soon as
            adversaries found workarounds. Anduril&apos;s proposed solution was a
            fast racing quadcopter that physically knocks enemy drones out of the
            sky. They built a proof of concept in about 12 weeks, entered a
            fly-off sponsored by the Defense Innovation Unit, and placed among
            the top systems there. Within two and a half years, their
            counter-drone system – later called Anvil – was a program of record.
          </p>
          <p>
            Next was Ghost, a near-silent reconnaissance drone with 100 minutes
            of flight time. All three of their first products – the Sentry
            towers, Anvil, and Ghost – plugged into the Lattice software
            platform. A Sentry tower detects a threat, Lattice classifies it and
            presents options to the operator, Anvil launches to intercept. A
            tower spots movement, Ghost flies to investigate. All three products
            can be controlled with one interface and one operator. Each new
            product made the other product more useful.
          </p>

          {/* Ghost X */}
          <figure className="article-figure">
            <img
              src="/images/001/ghost.webp"
              alt="The Anduril Ghost X"
              className="article-image"
            />
            <figcaption className="article-caption">
              The Anduril Ghost X (U.S. Army photo by Staff Sgt. LaShic
              Patterson)
            </figcaption>
          </figure>

          <p>
            This pattern — build hardware, plug it into Lattice, sell through
            existing government trust, let each product strengthen every other
            product — is what turned Anduril from a border security startup into
            a $60 billion defense company. They didn&apos;t try to win a massive
            contract on day one. They started with a tower on a rancher&apos;s
            fence, proved it worked, and let traction build the case.
          </p>
          <p>
            There were also technical synergies between products. To solve the
            communication challenges of the remote southern border, Schimpf and
            his team engineered and patented a mesh networking system. If even
            one Sentry tower stays connected to the internet, every tower in the
            mesh stays connected. That infrastructure, built to solve a border
            surveillance problem, now runs inside Anduril&apos;s submarines and
            jet fighters.
          </p>
          <p>
            From the border, the pattern expanded. In April 2021, Anduril
            acquired Area-I, gaining a tube-launched drone called Altius that
            could be deployed from C-130 aircraft, helicopters, and ground
            vehicles — and immediately plugged it into Lattice. In February
            2022, they acquired Dive Technologies and its autonomous submarine.
            Three months later, the Royal Australian Navy signed a $100 million
            contract for extra-large autonomous undersea vehicles. Each
            acquisition followed the same logic: find proven hardware that fills
            a gap in a domain the military needs, connect it to the platform,
            and sell it through the trust Anduril has already built. As Stephens
            put it, &ldquo;We don&apos;t want to just acquire your company and
            shut it down. We want to take the best ideas and technologies and
            use our business development strategy and pour jet fuel on it.&rdquo;
          </p>

          {/* DIVE-LD submarine */}
          <figure className="article-figure">
            <img
              src="/images/001/dive.jpg"
              alt="The DIVE-LD autonomous submarine"
              className="article-image"
            />
            <figcaption className="article-caption">
              The DIVE-LD autonomous submarine. Photo courtesy of Dive
              Technologies Inc.
            </figcaption>
          </figure>

          <p>
            Meanwhile, Anduril was developing new products at a pace the defense
            industry wasn&apos;t used to seeing. Roadrunner — a twin-turbojet
            interceptor that takes off vertically, hunts enemy drones, and lands
            to be reused if it doesn&apos;t find one — went from concept to
            combat evaluation in under two years. Anduril spent roughly $80
            million of its own money developing it before the Pentagon ordered
            more than 500 units in a $250 million contract. Barracuda is a
            cruise missile with a range over 500 nautical miles that can be
            launched from fighter jets, helicopters, or cargo planes, designed
            from the start to be built cheaply enough to produce in the
            thousands. And Fury — an autonomous jet with a 17-foot wingspan that
            flies combat missions without a pilot — beat Boeing, Lockheed, and
            Northrop for a spot in the Air Force&apos;s Collaborative Combat
            Aircraft program, then flew its first semi-autonomous mission in
            October 2025.
          </p>
          <p>
            Every one of these products runs on Lattice. Every deployment
            generates data that makes Lattice smarter. Every contract builds the
            trust that opens the door for the next one. This flywheel is what
            makes acquisitions so accretive.
          </p>
          <p>
            Packy McCormick captured it best when he called Anduril &ldquo;a
            meta-version of Lattice.&rdquo; On the battlefield, Lattice
            integrates sensors and autonomous systems into a single picture. At
            the company level, Anduril integrates the defense market itself —
            bridging the gap between the DoD&apos;s $300 billion annual
            procurement budget and the startups building the technology the
            military actually needs, through a layer of trust, clearances,
            relationships, and integration work that took eight years to
            construct.
          </p>
          <p>
            &ldquo;Because returns are so punctuated and creating hardware takes
            many years to get right and to become trusted within a field,
            acquisitions accelerate your positioning against those big punctuated
            movements,&rdquo; Anduril&apos;s CRO Matthew Steckman has said.
            &ldquo;The more it&apos;s out there and working, the more you get
            this interesting social effect on trust.&rdquo;
          </p>
          <p>
            Anduril&apos;s recently signed $20 billion Army contract consolidates
            more than 120 separate procurement actions into a single deal.
            Revenue should hit $4.3 billion in 2026, roughly double 2025, and it
            has raised more than $7 billion of capital as it positions itself to
            be the first new prime defense company created in over one hundred
            years.
          </p>
          <p>
            Now Anduril is building the factory to match that ambition. Arsenal-1
            occupies 700,000 square feet of Cold War-era hangars at the former
            Rickenbacker Air National Guard Base in Ohio, next to two 12,000-foot
            runways originally built for bombers carrying atomic weapons. The
            full campus will reach five million square feet. When production
            begins later this year, the same lines will manufacture drones, jet
            fighters, missiles, and submarines. The name is a deliberate nod to
            the early 1940s, when Roosevelt called the American industrial base
            the &ldquo;Arsenal of Democracy&rdquo; and the country was building
            a destroyer every four days. In eight years, the company went from
            four towers on a rancher&apos;s fence to a $20 billion Army contract
            and a hyperscale defense manufacturing facility.
          </p>

          {/* Arsenal-1 */}
          <figure className="article-figure">
            <img
              src="/images/001/arsenal.png"
              alt="Anduril's Arsenal-1 factory in Pickaway County, Ohio"
              className="article-image"
            />
            <figcaption className="article-caption">
              Anduril&apos;s Arsenal-1 is a software-defined weapons factory in
              Pickaway County, Ohio.
            </figcaption>
          </figure>

          <h2>The Future of Warfare</h2>
          <p>
            In 2003, the U.S. invaded Iraq with 130,000 troops, 800 tanks, and
            squadrons of F-15s, F-16s, and B-2 bombers. The campaign cost over
            $2 trillion. The vehicles were crewed. The munitions were dumb or
            laser-guided. The intelligence came from satellites and human scouts.
            It was, in most respects, a 20th-century war fought with
            20th-century equipment.
          </p>
          <p>
            Twenty years later, the nature of warfare has changed beyond
            recognition. In Ukraine, cheap drones assembled in garage workshops
            are responsible for 70-80% of all battlefield casualties. They cost
            about $400 each, and a single one can disable a tank worth millions.
            Ukraine produced over 4 million drones in 2025 from a network of
            domestic manufacturers and is targeting 7 million in 2026. In the Red
            Sea, Houthi drones costing a few thousand dollars have tied up
            American missile defense systems costing several million dollars per
            intercept.
          </p>
          <p>
            The era of small numbers of exquisitely-engineered, expensive
            platforms is giving way to an era of mass-produced,
            software-coordinated, autonomous systems. As one British military
            intelligence source told the press, &ldquo;We have seen a glimpse of
            the future, and drones will dominate the battlefield.&rdquo;
          </p>
          <p>
            Palmer Luckey has been thinking about what comes after that glimpse
            since long before he had the resources to build any of it. He talks
            about the future of war the way he talked about virtual reality in
            2012 – he cites the science fiction, then explains why the technology
            has finally caught up. &ldquo;For years there&apos;s been this
            science fiction trope of conflict in the future being defined by
            large numbers of swarming drones or autonomous systems,&rdquo; he
            has said. &ldquo;But it&apos;s not just a sci-fi trope. This is also
            what a lot of war planners and a lot of people looking at the
            military believe is going to be the future.&rdquo;
          </p>

          {/* Anvil */}
          <figure className="article-figure">
            <img
              src="/images/001/anvil.webp"
              alt="Anduril's Anvil drone interceptor system"
              className="article-image"
            />
            <figcaption className="article-caption">
              Anduril&apos;s Anvil drone interceptor system
            </figcaption>
          </figure>

          <p>
            Every product Anduril builds maps to a specific vision of where
            warfare is heading, and Luckey often cites the science fiction that
            described it first.
          </p>
          <p>
            Heinlein&apos;s <em>Starship Troopers</em> imagined soldiers in
            powered armor that made them faster, stronger, and harder to kill
            than any unaugmented human. Where Heinlein augmented the body, Luckey
            is augmenting the senses. When Anduril took over the Army&apos;s
            headset program from Microsoft, which had spent years and billions of
            dollars failing to make it work, he described his vision on his blog:
            &ldquo;Not just day and night and thermal and ultraviolet, but
            peering into an idealized interactive real-time composite of past,
            present, and future that will quickly surpass traditional senses like
            vision and touch. Put another way, Superman doesn&apos;t use menus –
            he just sees and does.&rdquo; The first EagleEye headsets,
            co-designed with Oakley, ship to soldiers this year at roughly half
            the per-unit cost the Army expected. A soldier wearing EagleEye can
            see in thermal and ultraviolet, see through walls, and coordinate
            with robotic teammates through the same Lattice interface that
            connects every other Anduril system.
          </p>
          <p>
            The Air Force&apos;s next program, Collaborative Combat Aircraft, is
            what Luckey describes as &ldquo;loyal wingman.&rdquo; A pilot flies
            an F-35 with several autonomous Fury jets in formation. They carry
            the same sensors and weapons the pilot does, but they fly ahead as
            the front line. If the pilot needs to clear a corridor through enemy
            air defenses, the unmanned fighters go first – absorbing the risk,
            drawing fire, sacrificing themselves to open a path. &ldquo;Imagine
            playing chess and you couldn&apos;t sacrifice your pawns,&rdquo; is
            the analogy Luckey invokes. Autonomous wingmen remove that
            constraint.
          </p>

          {/* Fury */}
          <figure className="article-figure">
            <img
              src="/images/001/fury.webp"
              alt="The Fury unmanned fighter jet"
              className="article-image"
            />
            <figcaption className="article-caption">
              The Fury unmanned fighter jet. Photo: Anduril&apos;s Palmer Luckey
              via X
            </figcaption>
          </figure>

          <p>
            Beyond air and land, Luckey sees warfare expanding into domains most
            militaries haven&apos;t seriously planned for. He believes the
            earth&apos;s surface will eventually become too surveilled for
            conventional operations. &ldquo;There&apos;s a lot more crust than
            there is air or sea or surface of land,&rdquo; he argues. He also
            sees America&apos;s military presence in space evolving into
            something like <em>Star Trek</em>: &ldquo;doing exactly what the
            United States Navy does on Earth, but in a growing space
            economy.&rdquo;
          </p>

          <h2>The World&apos;s Gun Store</h2>
          <p>
            &ldquo;I don&apos;t really want to be doing Anduril,&rdquo; Luckey
            confessed to Patrick O&apos;Shaughnessy on the{" "}
            <em>Invest Like the Best</em> podcast. &ldquo;I would rather be
            making virtual reality headsets, video games, toys, fast cars,
            spaceships – that&apos;s what I want to be doing. I&apos;m doing
            what I&apos;m doing with Anduril because I think it&apos;s important
            and going to be more impactful.&rdquo;
          </p>
          <p>
            What made it important was a problem most people in Silicon Valley
            didn&apos;t want to see. In the mid-2010s, every major American
            technology company was chasing the Chinese market. They were building
            censored products for Chinese consumers, manufacturing hardware in
            Chinese factories, and taking Chinese investment. When Google pulled
            out of Project Maven in 2018, the public reason was employee
            opposition to working with the military, but Luckey believed there
            was a different explanation. &ldquo;Tech companies refused to do any
            work with the United States military not because they thought it was
            unethical,&rdquo; he told Rick Rubin on the{" "}
            <em>Tetragrammaton</em> podcast. &ldquo;It was a business decision.
            They said, &lsquo;I&apos;m not going to work with the US military
            because if I do, China won&apos;t let me make
            money.&rsquo;&rdquo; The employee protests gave executives cover to
            do what the financial incentives called for. The result, as Luckey
            put it, was that &ldquo;Silicon Valley executives would have had more
            foreign policy power than the President of the United States.&rdquo;
          </p>
          <p>
            Anduril was founded to fill that gap, and the bet captured in the
            company&apos;s name – a weapon, reforged and placed in the right
            hands, can save the world – is ultimately a bet on deterrence.
          </p>
          <p>
            &ldquo;I&apos;ve always said we need to transition from being the
            world police to being the world gun store,&rdquo; Luckey explains.
            The goal is to make America and its allies into what he calls
            &ldquo;prickly porcupines – so that no one wants to step on
            them.&rdquo; If the weapons are cheap enough and effective enough,
            the cost of invading a country becomes prohibitively high. Wars that
            never start don&apos;t produce casualties.
          </p>
          <p>
            Ukraine is the painful illustration of what happens when deterrence
            fails. If Ukraine had been armed with millions of cheap autonomous
            drones before February 2022, it is difficult to imagine Russia
            invading. Instead, Ukraine had to build that capacity from scratch
            during a war, assembling 4 million drones a year from garage
            workshops while its cities were being bombed. Anduril&apos;s vision
            is to make sure no ally ends up in that position.
          </p>
          <p>
            &ldquo;What if instead of a $60 billion aid package for Ukraine, it
            was a $1 billion aid package, and it was 10 times as
            effective?&rdquo; Luckey asked Jeremy Stern in his excellent profile
            in <em>Tablet Magazine</em>. &ldquo;If you&apos;re building the
            right mass-produced, very cheap loitering munitions that are always
            able to do the job at a hundredth or a thousandth of the price of an
            existing system, at some point the justification for withholding aid
            goes away.&rdquo;
          </p>
          <p>
            That vision extends beyond American defense spending. Anduril has
            contracts with the Royal Australian Navy ($100 million for autonomous
            undersea vehicles), the UK Ministry of Defence, the Royal Marines,
            and a growing list of allied nations – the &ldquo;prickly
            porcupines&rdquo; taking shape. In September 2019, drones attacked
            two major Saudi oil refineries, temporarily halving the
            country&apos;s oil production – reminder that the threat of cheap,
            autonomous weapons isn&apos;t limited to the battlefield. Any
            facility that needs autonomous, 24/7 perimeter surveillance, from oil
            pipelines to nuclear power plants, is a potential Anduril customer.
          </p>
          <p>
            Luckey also argues that autonomous weapons are more moral than what
            they replace: &ldquo;There&apos;s no moral high ground to making a
            land mine that can&apos;t tell the difference between a school bus
            full of children and Russian armor.&rdquo; A weapon with onboard AI
            can identify what&apos;s in front of it and choose not to fire.
          </p>
          <p>
            As for what happens when the most capable weapons manufacturers in
            the world are venture-backed startups accountable to private
            investors, Luckey has thought about this more carefully than most
            people give him credit for. &ldquo;You shouldn&apos;t want that
            decision to be up to me,&rdquo; Luckey has said of which countries
            Anduril sells to, &ldquo; because I am the top executive of a
            for-profit private corporation. You should want that to be decided by
            government officials who are elected by the body populace and are
            accountable to them – who, when they make bad decisions, can be
            removed through an election. You can&apos;t remove me from Anduril
            if you disagree with my decisions.&rdquo;
          </p>
          <p>
            Unlike Google, Anduril&apos;s position is that it will build what the
            elected government asks for and let the democratic process set the
            boundaries. That position will be tested, and the founders who follow
            Anduril into defense should be prepared for that test.
          </p>

          <h2>A Call to Founders</h2>
          <p>
            Andreessen Horowitz has invested in every Anduril round since the
            Series D-1 in 2022, including the current raise at $60 billion
            alongside Thrive Capital. Katherine Boyle&apos;s American Dynamism
            practice is built on a conviction we hold deeply: the most important
            companies of this decade will be the ones that rebuild national
            capacity in defense, energy, manufacturing, and infrastructure.
            Anduril is the flagship of that conviction.
          </p>
          <p>
            In 2017, the conventional wisdom said Silicon Valley couldn&apos;t
            build defense hardware, couldn&apos;t navigate procurement,
            couldn&apos;t manufacture at scale, and would bail the moment things
            got politically uncomfortable. Anduril proved every one of those
            assumptions wrong. But they cannot close the gap alone.
          </p>
          <p>
            Brose&apos;s proposal for a &ldquo;Moneyball Military&rdquo;
            envisions two procurement tracks: the traditional system for legacy
            platforms, and a market-driven system for autonomous vehicles, small
            satellites, robotic systems, and commercially derived military tech.
            That second track needs hundreds of new companies.
          </p>
          <p>
            The defense budget is $867 billion and rising. Ukraine proved that
            drone warfare rewrites military doctrine in real time. The Red Sea
            showed that a drone costing a few thousand dollars can tie up a
            missile defense system worth millions. Every wargame on Taiwan
            arrives at the same conclusion: the side that runs out of munitions
            first loses.
          </p>
          <p>
            Venture-backed companies received less than 1% of the $411 billion
            in DoD contracts awarded in 2023 – barely up from 0.5% in 2010. The
            market is enormous and almost entirely untapped. The opportunity is
            not to build another Anduril. It is to build what Anduril can&apos;t
            build alone – in autonomous systems, electronic warfare, directed
            energy, undersea vehicles, satellite constellations, and
            manufacturing automation. The funding is there, from defense-focused
            VCs, from the DoD&apos;s own startup programs, and from contracts
            that are getting larger every year.
          </p>
          <p>The tactical lessons from Anduril&apos;s history:</p>
          <p>
            <strong>Start with a real customer and a real product.</strong>{" "}
            Anduril didn&apos;t try to win a fighter jet contract on day one.
            They started with a surveillance tower on a rancher&apos;s fence and
            let traction build the case. &ldquo;Don&apos;t be afraid to convince
            yourself that your business is incredible,&rdquo; Luckey has said,
            &ldquo;but don&apos;t expect others to be convinced without solid
            data to back it up. Ideas can be worth a lot, but they are usually
            not. Execution is everything.&rdquo;
          </p>
          <p>
            <strong>Wrap the software in metal.</strong> Trae Stephens learned
            early that the DoD has &ldquo;almost a moral aversion to paying
            software margins.&rdquo; But it will pay high prices for hardware.
            Anduril&apos;s real value is Lattice – the software – but it sells
            hardware that runs on Lattice. &ldquo;We use that as a Trojan horse
            to get software in the front door,&rdquo; Stephens has said. If
            you&apos;re building software for defense, figure out what piece of
            hardware makes it buyable.
          </p>
          <p>
            <strong>Build the platform, not just the product.</strong> Every
            product Anduril ships extends Lattice, and every extension makes
            every other product more valuable. Schimpf&apos;s mesh networking
            patent, built to solve a border surveillance problem, now runs inside
            submarines and fighter jets. Try to find opportunities that compound.
          </p>
          <p>
            <strong>Let the product lead the sale.</strong> Gokul Subramanian,
            Anduril&apos;s SVP of Space and Engineering, described the inversion:
            &ldquo;Instead of a customer telling you what to do, you&apos;re
            telling the customer what to do because you&apos;re putting software
            in front of them that totally changes their opinion of where the
            hardware should go.&rdquo; Traditional defense companies sell
            programs, then build to order. Anduril builds, then sells what
            works.
          </p>
          <p>
            <strong>Give engineers ownership.</strong> Schimpf borrowed this from
            Palantir and made it core to Anduril&apos;s culture: give young,
            ambitious engineers full ownership of outcomes. &ldquo;It&apos;s
            shitty work, but it&apos;s your shitty work,&rdquo; he told{" "}
            <em>Arena Magazine</em>. &ldquo;There are all these hard things like
            showing up late at night, upgrading things, racking servers. If you
            described that job to anyone, they would say this is a terrible
            low-level job. But if you say, &lsquo;no, no, no, you own this, do
            whatever you&apos;ve got to do to succeed,&rsquo; it&apos;s actually
            extremely rewarding.&rdquo;
          </p>
          <p>
            <strong>Don&apos;t assume the best product wins.</strong>{" "}
            &ldquo;People want to believe that if you build the best thing, then
            you&apos;ll win,&rdquo; Luckey has said. &ldquo;That&apos;s not the
            way that the real world works.&rdquo; In its first few months,
            Anduril hired more lawyers and lobbyists than engineers. It was a
            deliberate choice to learn how to navigate the institution before
            trying to sell to it. Eight years later, that investment in trust,
            security clearances, and government relationships is as much a part
            of Anduril&apos;s moat as Lattice is.
          </p>
          <p>
            <strong>
              Science fiction is a rich place to look for what to build next.
            </strong>{" "}
            &ldquo;Literally, nothing we&apos;ve ever done has been something
            that was not exhaustively covered in science fiction,&rdquo; Luckey
            told reporters last year. &ldquo;You&apos;ll never come up with
            anything new when you&apos;re in my industry.&rdquo; The future of
            war has been described in detail for a hundred years. The job was
            never imagining it. It was to know when the technology caught up to
            the fiction, and then build it. Luckey has also called Chris
            Brose&apos;s <em>The Kill Chain</em> &ldquo;a must-read book for
            anyone concerned about the erosion of U.S. military dominance.&rdquo;
          </p>
          <p>
            Building weapons to protect a democracy is among the most technically
            challenging, most consequential, and most important work an engineer
            can do. The best people in the country will sign up for it. The DoD
            will buy from companies that move fast. Anduril proved all of this.
          </p>
          <p>Now it&apos;s your turn.</p>
        </div>

        {/* Back link */}
        <div
          style={{
            maxWidth: 680,
            margin: "0 auto",
            padding: "48px 0 100px",
            borderTop: "1px solid rgba(232,228,222,0.08)",
            marginTop: 64,
          }}
        >
          <Link
            href="/"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#c4956a",
              borderBottom: "1px solid rgba(196,149,106,0.3)",
              paddingBottom: 4,
              textDecoration: "none",
            }}
          >
            ← Back to all profiles
          </Link>
        </div>
      </article>
    </div>
  );
}
