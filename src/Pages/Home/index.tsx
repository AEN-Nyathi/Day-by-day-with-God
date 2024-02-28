import Ntsako from '@Images/Ntsako.jpg';
import Candy from '@Images/Candy.jpg';
export default function Home() {
	return (
		<main>
			<section className="grid content-around bg-light/50 dark:bg-dark/50 center  h-svh">
				<h1>
					Nurturing Minds, Elevating Grades: Affordable After-School Care with a
					Heart.
				</h1>
				<h2 className="my-8">
					Smart, Supportive, and Super Affordable: Give Your Child the Edge with
					Day by Day.
				</h2>
				<div className=" p-2 m-2 rounded-md  ">
					<h3 className="">Classes starts on: 1 feb 2024</h3>
					<button>Register Now</button>
				</div>
			</section>

			<section className="md:grid-cols-2 md:grid md:gap-2 items-start">
				<h2 className="col-span-2 gap-2">Day by Day with God:</h2>

				<article>
					<h3>Day Care (3 months - 5 years):</h3>
					<h4>
						Little Explorers: Nurturing Curiosity and Faith in Every Tiny Step
					</h4>
					<h3>Description:</h3>
					<ol className="list-disc pl-6">
						<li>
							Spark imaginations and build a lifelong love of learning in our
							nurturing day care program.
						</li>
						<li>
							Engaging activities for every age, from sensory play and music to
							art, storytelling, and outdoor exploration.
						</li>
						<li>
							Faith-based values woven into daily routines, fostering kindness,
							compassion, and a sense of community.
						</li>
						<li>
							Safe and stimulating environment with caring staff who are experts
							in early childhood development.
						</li>
						<li>
							Individualized attention to support each child's unique needs and
							interests.
						</li>
					</ol>
					<h3>Location:</h3>
					<p>
						<ul>
							<li>Phalabowa Lulekani</li>
							<li>1392</li>
							<li>Nyenyakulu</li>
						</ul>
					</p>
					<h3>Oparection time</h3>
					<p>
						<ul>
							<li>Monday to friday</li>
							<li>08:00 to 15:00</li>
						</ul>
					</p>
					<h3>Price Transparency:</h3>
					<p>
						Price for dayCare:
						<ol className="list-disc pl-6">
							<li>0 months - 3 months R00,00</li>
							<li>3 months - 6 months R00,00</li>
							<li>1 year - 5 years R00,00</li>
						</ol>
					</p>
					<h3>Tutor</h3>
					<ul className=" p-2  flex flex-wrap gap-4">
						<li className="flex py-2  justify-start ">
							<img src={Ntsako} className="h-16 w-16 rounded-full" />
							<div className="ml-3  p-0">
								<h4>Ms GV Nyathi</h4>

								<ol className=" flex flex-wrap gap-x-6">
									<li>Mathematics</li>
									
								</ol>
							</div>
						</li>
						<li className="flex py-2  justify-start ">
							<img src={Candy} className="h-16 w-16 rounded-full" />
							<div className="ml-3  p-0">
								<h4>Ms C Chabalala</h4>

								<ol className=" flex flex-wrap gap-x-6">
									<li>Mathematics</li>
								</ol>
							</div>
						</li>
					</ul>
				</article>
				<article>
					<h3>After Care (Grade 4 - Grade 12):</h3>
					<h4>
						Academic Edge with a Heart: Transforming Homework into High Fives
					</h4>
					<h3>Description:</h3>
					<ol className="list-disc pl-6">
						<li>
							Fuel academic success and build confidence in our supportive
							after-school care program.
						</li>
						<li>
							Qualified tutors providing personalized homework help and academic
							enrichment in core subjects.
						</li>
						<li>
							Extended learning time to ensure understanding and mastery of key
							concepts.
						</li>
						<li>
							Faith-based values integrated into study sessions, encouraging
							perseverance, integrity, and respect.
						</li>
						<li>
							Fun and engaging activities to balance academics and foster
							creativity and social skills.
						</li>
						<li>
							Affordable rates that make quality education accessible to all
							families.
						</li>
					</ol>
					<h3>Location:</h3>
					<p>
						<ul>
							<li>Phalabowa Lulekani</li>
							<li>1392</li>
							<li>Matiko-xikaya 234b ka zaki</li>
						</ul>
					</p>
					<h3>Oparection time</h3>
					<ul className=" p-2  flex flex-wrap gap-4">
						<li className="flex py-2  justify-start ">
							<img src={Ntsako} className="h-16 w-16 rounded-full" />
							<div className="ml-3  p-0">
								<h4>Mr AEN Nyathi</h4>
								<p>
									{' '}
									Monday - friday
									<ol className="">
										<li>Homework Help: 14:00 - 15:30</li>
										<li>Subject Help: 15:30 - 17:00 </li>
									</ol>
								</p>
							</div>
						</li>
						<li className="flex py-2  justify-start ">
							<img src={Candy} className="h-16 w-16 rounded-full" />
							<div className="ml-3  p-0">
								<h4>Ms C Chabalala</h4>
								<p>
									{' '}
									Monday - friday
									<ol className="">
										<li>Homework Help: 14:00 - 15:30</li>
										<li>Subject Help: 15:30 - 17:00 </li>
									</ol>
								</p>
							</div>
						</li>
					</ul>

					<h3>Price Transparency:</h3>
					<p>
						Price for After Care:
						<ol className="list-disc pl-6">
							<li>Grade 4 - Grade 9 R250,00 for all subjects</li>
							<li>
								Grade 10 and Grade 11 per subject
								<ol className="ml-6 flex flex-wrap gap-x-6">
									<li>Maths R80,00 </li>
									<li>Physics R80,00 </li>
									<li>Life science R80</li>
									<li>Agri science R80</li>
									<li>Geograph R80</li>
									<li>English R50</li>
									<li>Xistonga R50</li>
								</ol>
							</li>
							<li>
								Grade 10 and Grade 11 Grouped subject
								<ol className="list-disc pl-6">
									<li>
										Maths, Physics, Life science, Agri / Geograph R150,00{' '}
									</li>
									<li>English and Xistonga R80 </li>
								</ol>
							</li>
						</ol>
					</p>

					<h3>Tutor</h3>
					<ul className=" p-2  flex flex-wrap gap-4">
						<li className="flex py-2  justify-start ">
							<img src={Ntsako} className="h-16 w-16 rounded-full" />
							<div className="ml-3  p-0">
								<h4>Mr AEN Nyathi</h4>
								{/* <h3>Mr AEN Nyathi</h3> */}

								<ol className=" flex flex-wrap gap-x-4">
									<li>Mathematics</li>
									<li>Physics science</li>
									<li>Chemitry science</li>
									<li>Life science </li>
									<li>Agricultural science </li>
									<li>English (F.A.L)</li>
									<li>Technology </li>
									<li>Natural science (N.S) </li>
									<li>Social science (S.S) </li>
									<li>Economic management science (E.M.S)</li>
								</ol>
							</div>
						</li>
						<li className="flex py-2  justify-start ">
							<img src={Candy} className="h-16 w-16 rounded-full" />
							<div className="ml-3  p-0">
								<h4>Ms C Chabalala</h4>

								<ol className=" flex flex-wrap gap-x-4">
									<li>Mathematics</li>
									<li>Physics </li>
									<li>Life science </li>
									<li>Geograph </li>
									<li>English (F.A.L)</li>
									<li>Xistonga </li>
									<li>Technology </li>
									<li>Natural science (N.S) </li>
									<li>Social science (S.S) </li>
								</ol>
							</div>
						</li>
					</ul>
				</article>
			</section>

			<h2>Meet the Team:</h2>
			<section className="md:grid-cols-2  my-5">
				<article>
					<h3>Day Care (3 months - 5 years):</h3>
				</article>
				<article>
					<h3>After Care (Grade 3 - Grade 12):</h3>
					<ul className=" p-2  flex flex-wrap gap-4">
						<li className="flex py-2  justify-start ">
							<img src={Ntsako} className="h-20 w-20 rounded-full" />
							<div className="ml-3   p-0">
								<h3>Mr AEN Nyathi</h3>
								{/* <h3>Mr AEN Nyathi</h3> */}
								<p className="font-bold  truncate ">Director</p>
								<p className=" truncate lining-nums ">079-113-8480</p>
								<p className=" truncate ">abrameltonntsako@gmail.com</p>
								<p className=" truncate ">Phalaborwa Lulekani</p>
								<p className=" text-wrap">
									<b>Student </b>Diploma In Industrial Engineering @ VUT
								</p>
								<a href="https://abrameltonntsako.web.app/">
									abrameltonntsako.web.app
								</a>
							</div>
						</li>
						<li className="flex py-2  justify-start ">
							<img src={Candy} className="h-20 w-20 rounded-full" />
							<div className="ml-3  p-0">
								<h3>Ms C Chabalala</h3>
								<p className="font-bold  truncate ">Tutor</p>
								<p className=" truncate lining-nums ">076-309-4194</p>
								<p className=" truncate ">Chabalala Candies</p>
								<p className=" truncate ">Phalaborwa Lulekani</p>
								<p className=" text-wrap">
									<b>Artist </b>MakeUp artist @ PHB
								</p>
							</div>
						</li>
					</ul>
				</article>
			</section>
		</main>
	);
}
