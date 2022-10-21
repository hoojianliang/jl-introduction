export default function About() {
  return (
    <div>
      <div className="m-4">
        <ul className="list-decimal">
          <li className="mb-4">
            <p className="font-bold">Introduction</p>
            <p>This is a Next.js project bootstrapped with create-next-app.</p>
            <p>
              Please visit{" "}
              <a
                href="https://jlprofile.home.blog/"
                aria-label="My Blog"
                className="text-blue-600 visited:text-purple-600"
              >
                https://jlprofile.home.blog/
              </a>{" "}
              for more visualisation details for the projects that I have done.
            </p>
          </li>
          <li className="mb-4">
            <p className="font-bold">Objective</p>
            <p>Just another way to introduce myself and self-learning.</p>
          </li>
          <li className="mb-4">
            <p className="font-bold">How it built</p>
            <div>
              <p>TypeScript, Next.js, Tailwind CSS, Framer Motion, Headless UI</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
