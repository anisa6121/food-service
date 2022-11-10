import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
	useTitle("Blog");
	return (
		<>
			<div className=" text-gray-100">
				<div className="m-3 container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-200">
					<div className="mt-3">
						<p className="text-2xl font-bold  text-amber-500">
							1. Difference between SQL and
							NoSQL
						</p>
						<p className="mt-2 text-black font-bold text-lg">
							1. SQL is RELATIONAL DATABASE
							MANAGEMENT SYSTEM (RDBMS) But
							<br />
							NOSQL is Non-relational or
							distributed database system.
							<br />
							2. SQL databases have fixed or
							static or predefined schema But{" "}
							<br />
							NOSQL have dynamic schema
							<br />
							3. SQL databases are best
							suited for complex queries But{" "}
							<br />
							NOSQL databases are not so good
							for complex queries
							<br />
							4. SQL Vertically Scalable But{" "}
							<br />
							NOSQL Horizontally scalable
							<br />
							5.SQL databases are better for
							multi-row transactions, while
							NoSQL is better for
							unstructured data like
							documents or JSON.
						</p>
					</div>
				</div>
			</div>

			<div className=" text-gray-100">
				<div className="m-3 container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-200">
					<div className="mt-3">
						<p className="text-2xl font-bold  text-amber-500">
							2.What is JSON Web Token?And
							jwt workes
						</p>
						<p className="mt-2 text-black font-bold text-lg">
							JSON Web Token (JWT) is an open
							standard (RFC 7519) that
							defines a compact and
							self-contained way for securely
							transmitting information
							between parties as a JSON
							object. This information can be
							verified and trusted because it
							is digitally signed. JWTs can
							be signed using a secret (with
							the HMAC algorithm) or a
							public/private key pair using
							RSA or ECDSA.
							<br />
							It works <br />
							Basically the identity
							provider(IdP) generates a JWT
							certifying user identity and
							Resource server decodes and
							verifies the authenticity of
							the token using secret salt /
							public key. <br />
							1.User sign-in using username
							and password or
							google/facebook. <br />
							2. Authentication server
							verifies the credentials and
							issues a jwt signed using
							either a secret salt or a
							private key. <br />
							3. User's Client uses the JWT
							to access protected resources
							by passing the JWT in HTTP
							Authorization header. <br />
							4. Resource server then
							verifies the authenticity of
							the token using the secret
							salt/ public key. <br />
							5. Client stores the token on
							either localstorage or browser
							cookie And next time the client
							makes a request, a copy of the
							token is send to the server for
							authorization. Server verifies
							before giving the
							authorization. Then server
							respons to the clients request.
						</p>
					</div>
				</div>
			</div>

			<div className=" text-gray-100">
				<div className="m-3 container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-200">
					<div className="mt-3">
						<p className="text-2xl font-bold  text-amber-500">
							3. Differences Between Node.js
							and JavaScript?
						</p>
						<p className="mt-2 text-black font-bold text-lg">
							1. JavaScript is a client-side
							scripting language that is
							lightweight, cross-platform,
							and interpreted. Both Java and
							HTML include it. Node.js, on
							the other hand, is a V8-based
							server-side programming
							language. <br />
							2. JavaScript is a simple
							programming language that can
							be used with any browser that
							has the JavaScript Engine
							installed. Node.js, on the
							other hand, is an interpreter
							or execution environment for
							the JavaScript programming
							language. It requires libraries
							that can be conveniently
							accessed from JavaScript
							programming to be more helpful.{" "}
							<br />
							3. The critical benefits of
							JavaScript include a wide
							choice of interfaces and
							interactions and just the
							proper amount of server contact
							and direct visitor input.
							Node.js, on the other hand,
							offers node package management
							with over 500 modules and the
							capacity to handle many
							requests at the same time. It
							also offers the unique ability
							to enable microservice
							architecture and the Internet
							of Things. Even when comparing
							node js vs. react js, node js
							always wins.
							<br />
							4. A specific non-blocking
							operation is required to access
							any operating system. There are
							a few essential objects in
							JavaScript, but they are
							entirely OS-specific. Node.js,
							on the other hand, can now
							operate non-blocking software
							tasks out of any JavaScript
							programming. It contains no
							OS-specific constants. Node.js
							establishes a strong
							relationship with the system
							files, allowing companies to
							read and write to the hard
							drive. <br />
							5. Any engine may run
							JavaScript. As a result,
							writing JavaScript is
							incredibly easy, and any
							working environment is similar
							to a complete browser. Node.js,
							on the other hand, only enables
							the V8 engine. Written
							JavaScript code, on the other
							hand, can run in any context,
							regardless of whether the V8
							engine is supported.
						</p>
					</div>
				</div>
			</div>

			<div className=" text-gray-100">
				<div className="m-3 container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-200">
					<div className="mt-3">
						<p className="text-2xl font-bold text-amber-500">
							4. How NodeJS handle multiple
							client requests at the same
							time?
						</p>
						<p className="mt-2 text-black font-bold text-lg">
							NodeJS receives multiple client
							requests and places them into
							EventQueue. NodeJS is built
							with the concept of
							event-driven architecture.
							NodeJS has its own EventLoop
							which is an infinite loop that
							receives requests and processes
							them. EventLoop is the listener
							for the EventQueue. If NodeJS
							can process the request without
							I/O blocking then the event
							loop would itself process the
							request and sends the response
							back to the client by itself.
							But, it is possible to process
							multiple requests parallelly
							using the NodeJS cluster module
							or worker_threads module.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Blog;
