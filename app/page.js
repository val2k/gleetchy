export default function Home() {
  return (
    <main className="w-screen">
      <section className="h-svh p-4">
        <nav className="font-medium text-4xl text-white mix-blend-difference">
          <ul className="flex flex-row gap-1">
            <li className="relative">
              Work
              <span className="absolute -bottom-3 right-0 text-xs jb-mono">
                01
              </span>
            </li>
            ,
            <li className="relative">
              About
              <span className="absolute -bottom-3 right-0 text-xs jb-mono">
                09
              </span>
            </li>
            ,
            <li className="relative">
              Projects
              <span className="absolute -bottom-3 right-0 text-xs jb-mono">
                12
              </span>
            </li>
          </ul>
        </nav>

        <div className="absolute inset-0 -z-10">
          <video
            src="/DTS.mov"
            muted
            autoPlay
            loop
            className="object-cover h-full w-full grayscale"
          />
        </div>

        <div className="absolute bottom-4 right-4 jb-mono text-white mix-blend-difference text-[11px]">
          <p className="max-w-[70ch]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi. Proin
            porttitor, orci nec nonummy molestie, enim est eleifend mi, non
            fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa,
            scelerisque vitae, consequat in, pretium a, enim. Pellentesque
            congue Praesent dapibus, neque id cursus faucibus, tortor neque
            egestas augue, eu vulputate magna eros eu erat. Aliquam erat
            volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis
            luctus, metus. Phasellus ultrices nulla quis nibh. Quisque a lectus.
            Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla
            quam, gravida non, commodo a, sodales sit amet, nisi.
          </p>
        </div>
      </section>
    </main>
  );
}
