import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="box py-[80px]">
      <div className="mb-[80px]">
        <Image
          src={"/images/n1.png"}
          alt="..."
          height={1000}
          width={1000}
          className="w-full"
        />
        <p className="font-medium text-[23px] py-[10px]">
          Narra - Content Management for Video Streaming Platform
        </p>
        <p className="font-normal text-base pb-[10px]">
          A B2B video content management platform designed to improve the
          workflows of Editors and Publishers by addressing challenges in
          uploading, tagging, segmenting, and approving content. The project
          also included product strategy definition, competitor benchmarking,
          user flow mapping, and a usability testing plan to validate the
          solution.
        </p>
      </div>
      <div className="mb-[80px]">
        <Image
          src={"/images/n2.png"}
          alt="..."
          height={1000}
          width={1000}
          className="w-full"
        />
      </div>
      <div className="mb-[80px]">
        <p className="font-medium text-[23px] py-[10px]">Target User</p>
        <p className="font-medium text-base pb-[10px]">Persona 1: Editor</p>
        <p className="font-medium text-base pb-[10px]">
          Role:{" "}
          <span className="font-normal">Content uploader and segmenter</span>
        </p>

        <div className="space-y-10 mt-10">
          <div className="overflow-x-auto border border-borderColor  rounded-lg">
            <table className="min-w-full overflow-hidden">
              <thead>
                <tr className="bg-[#F5F5F5] text-left text-sm ">
                  <th className="p-4  font-normal border-r border-borderColor">
                    🧩 Responsibilities
                  </th>
                  <th className="p-4 font-normal border-r border-borderColor">
                    🎯 Goals
                  </th>
                  <th className="p-4 font-normal border-r border-borderColor">
                    Pain Points
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm  bg-white">
                <tr className="border-t border-borderColor">
                  <td className="p-4 border-r border-borderColor">
                    Upload movies and TV series
                  </td>
                  <td className="p-4 border-r border-borderColor">
                    Upload and manage video content efficiently
                  </td>
                  <td className="p-4 border-r border-borderColor">
                    Tedious one-by-one uploading process & Inability to
                    multitask during video upload{" "}
                  </td>
                </tr>
                <tr className="border-t  border-borderColor">
                  <td className="p-4 border-r border-borderColor">
                    Enter metadata
                  </td>
                  <td className="p-4 border-r border-borderColor">
                    Structure content by season and episode
                  </td>
                  <td className="p-4 border-r border-borderColor">
                    Each episode may require unique descriptions and content
                    customization
                  </td>
                </tr>
                <tr className="border-t  border-borderColor">
                  <td className="p-4 border-r border-borderColor">
                    Define seasons and episodes
                  </td>
                  <td className="p-4 border-r border-borderColor">
                    Personalize thumbnails for different user segments
                  </td>
                  <td className="p-4 border-r border-borderColor">
                    Difficulty assigning multiple thumbnails for different
                    audiences
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <p className="font-medium text-base pb-[10px]">
              Persona 2: Publisher
            </p>
            <p className="font-medium text-base pb-[10px]">
              Role: <span className="font-normal">Content reviewer and </span>
            </p>
            <div className="overflow-x-auto border border-borderColor rounded-lg mt-10">
              <table className="min-w-full overflow-hidden">
                <thead>
                  <tr className="bg-[#F5F5F5] text-left text-sm">
                    <th className="p-4 font-normal border-r border-borderColor">
                      🧩 Responsibilities
                    </th>
                    <th className="p-4 font-normal border-r border-borderColor">
                      🎯 Goals
                    </th>
                    <th className="p-4 font-normal border-r border-borderColor">
                      Pain Points
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm bg-white">
                  <tr className="border-t border-borderColor">
                    <td className="p-4 border-r border-borderColor">
                      Review the uploaded content
                    </td>
                    <td className="p-4 border-r border-borderColor">
                      Review new uploads easily
                    </td>
                    <td className="p-4 border-r border-borderColor">
                      Can’t distinguish new vs old uploads
                    </td>
                  </tr>
                  <tr className="border-t border-borderColor">
                    <td className="p-4 border-r border-borderColor">
                      Check for errors
                    </td>
                    <td className="p-4 border-r border-borderColor">
                      Publish only well-structured content
                    </td>
                    <td className="p-4 border-r border-borderColor">
                      No structured flow for feedback
                    </td>
                  </tr>
                  <tr className="border-t border-borderColor">
                    <td className="p-4 border-r border-borderColor">
                      Approve or return with comments
                    </td>
                    <td className="p-4 border-r border-borderColor">
                      Give feedback quickly when needed
                    </td>
                    <td className="p-4 border-r border-borderColor">
                      Lack of visibility into what’s being uploaded
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Image
              src={"/images/n3.png"}
              alt="..."
              height={1000}
              width={1000}
              className="w-full mt-10"
            />
          </div>
        </div>
        {/*  */}
        <div>
          <Image
            src={"/images/image.png"}
            alt="..."
            height={1000}
            width={1000}
            className="w-full mb-[80px]"
          />
          <Image
            src={"/images/n4.png"}
            alt="..."
            height={1000}
            width={1000}
            className="w-full mb-[80px]"
          />
          <Image
            src={"/images/n5.png"}
            alt="..."
            height={1000}
            width={1000}
            className="w-full mb-[80px]"
          />
          <div>
            <p className="font-medium text-[17px]">Solution</p>
            <Image
              src={"/images/n6.png"}
              alt="..."
              height={1000}
              width={1000}
              className="w-full "
            />
            <ul className="list-disc font-normal text-base">
              <li>
                <p className="font-semibold">Introduced a Bulk Upload System</p>
                <p>
                  Enabled editors to upload multiple video files at once,
                  significantly reducing the time spent on repetitive manual
                  uploads.
                </p>
              </li>
              <li>
                <p className="font-semibold">
                  Background Uploading with Parallel Editing
                </p>
                <p>
                  While videos upload in the background, editors can
                  simultaneously work on creating new movies or series entries,
                  increasing overall productivity.
                </p>
              </li>
              <li>
                <p className="font-semibold">
                  Structured Editing at Episode Level{" "}
                </p>
                <p>
                  Each uploaded video can be edited individually, allowing
                  editors to input specific metadata, descriptions, and
                  publishing rules per episode.
                </p>
              </li>
              <li>
                <p className="font-semibold">Advanced Thumbnail Management</p>
                <p>
                  Editors can assign custom thumbnails per episode, extract them
                  directly from the video, or define display rules (e.g., "Use
                  this thumbnail on mobile only").
                </p>
              </li>
              <li>
                <p className="font-semibold">
                  Conditional Display Logic for Visual Assets
                </p>
                <p>
                  Introduced if/else rule-based thumbnail display, giving
                  editors flexibility over how visuals appear across platforms
                  and screen sizes.
                </p>
              </li>
              <li>
                <p className="font-semibold">
                  Seamless Linking of Content to Series or Movies{" "}
                </p>
                <p>
                  Editors can quickly link uploaded videos to existing or new
                  series/movies, ensuring a clean and consistent content
                  structure.
                </p>
              </li>
              <li>
                <p className="font-semibold">
                  Drag-and-Drop Reordering of Episodes
                </p>
                <p>
                  Reordering episodes within a series is now intuitive and fast,
                  thanks to a drag-and-drop interface integrated into the
                  episode
                </p>
              </li>
            </ul>
            <Image
              src={"/images/n7.png"}
              alt="..."
              height={1000}
              width={1000}
              className="w-full mt-10 "
            />
          </div>
        </div>
      </div>
      <div className="pb-[80px]">
        <p className="font-medium text-[23px] py-[10px]">Validation</p>
        <p className="font-medium text-[17px] ">🎯 Test Structure</p>
        <p className="font-normal text-base mt-5 ">
          Validate the <span className="font-medium">usability</span> and{" "}
          <span className="font-medium">discoverability</span> of the{" "}
          <span className="font-medium">Video Library</span> feature and related
          workflows ensuring that editors can efficiently upload, organize, and
          manage content.
        </p>
        <img
          src={
            "https://framerusercontent.com/images/uhVJu62iJpqA3AMedaPkfOZ5fOE.png"
          }
          alt="..."
          className="w-full mt-10"
        />
      </div>
      {/*  */}
      <div className="pb-[80px]">
        <p className="font-medium text-[23px] py-[10px]">👥 Participants</p>
        <p className="font-medium text-[17px] ">Target Group:</p>
        <p className="font-normal text-base ">
          6–8 users who are editors or content managers familiar with media
          upload workflows.
        </p>
        <p className="font-medium text-base mt-5">User Segments:</p>
        <ul className="list-disc">
          <li>
            <p className="font-medium text-base ">
              4 Frequent Uploaders (Daily/Weekly)
            </p>
            <p className="font-normal text-base ">
              → Help validate efficiency improvements and reveal workflow
              friction early.
            </p>
          </li>
          <li>
            <p className="font-medium text-base ">
              2 Occasional Uploaders (Monthly)
            </p>
            <p className="font-normal text-base ">
              → Help test discoverability of features like "Create" and "Link".
            </p>
          </li>
          <li>
            <p className="font-medium text-base ">
              2 New Users (No Prior Experience)
            </p>
            <p className="font-normal text-base ">
              → Reveal the intuitiveness of the platform with no onboarding or
              prior usage.
            </p>
          </li>
        </ul>
      </div>
      {/*  */}
      <div className="pb-[80px]">
        <p className="font-medium text-[23px] py-[10px]">🔍 Focus Areas</p>
        <p className="font-medium text-[17px] mt-5 ">1. Video Library</p>
        <ul className="list-disc">
          <li>
            <p className="font-normal text-base ">
              Is it easy to find and understand?
            </p>
          </li>
          <li>
            {" "}
            <p className="font-normal text-base ">
              Does it actually save time in real workflows?
            </p>
          </li>
        </ul>
        {/*  */}
        <p className="font-medium text-[17px] mt-5 ">
          2. "Linking" Terminology
        </p>
        <ul className="list-disc">
          <li>
            <p className="font-normal text-base ">
              Is the term "link" clear when connecting videos to movies or
              series?
            </p>
          </li>
        </ul>
        <p className="font-medium text-[17px] mt-5 ">
          3. "Create" Action Visibility
        </p>
        <ul className="list-disc">
          <li>
            <p className="font-normal text-base ">
              Are "Create" actions (to upload or start a new series/movie)
              discoverable and clear?
            </p>
          </li>
        </ul>
        <img
          src={
            "https://framerusercontent.com/images/ZmdKYzIel6Ub1SWf6ABov5gEZJo.png"
          }
          alt="..."
          className="w-full mt-10"
        />
        <p className="font-medium text-[17px] mt-5 ">
          4. Automatic Thumbnail Generation
        </p>
        <ul className="list-disc">
          <li>
            <p className="font-normal text-base ">
              Does it simplify the process?
            </p>
          </li>
          <li>
            <p className="font-normal text-base ">
              Are there any downsides (e.g., irrelevant frames, inappropriate
              visuals)?
            </p>
          </li>
        </ul>
        <img
          src={
            "https://framerusercontent.com/images/DsIx9Gu3rWrXhMllQWilSKds.png"
          }
          alt="..."
          className="w-full mt-10"
        />
        <p className="font-medium text-[17px] mt-5 ">
          5. Episode Reordering (Drag & Drop)
        </p>
        <ul className="list-disc">
          <li>
            <p className="font-normal text-base ">
              Can users <span className="font-medium">discover</span> and{" "}
              <span className="font-medium">use</span> drag-and-drop
              functionality easily when ordering episodes?
            </p>
          </li>
        </ul>
        <img
          src={
            "https://framerusercontent.com/images/Ct1BKkX1sMgZPa0wKGbPX9Zs7E.png"
          }
          alt="..."
          className="w-full mt-10"
        />
        <p className="font-medium text-[17px] mt-5 ">
          6. Commenting / Feedback Loop
        </p>
        <ul className="list-disc">
          <li>
            <p className="font-normal text-base ">
              Can users
              <span className="font-medium">
                find where to leave a comment?
              </span>
            </p>
          </li>
          <li>
            <p className="font-normal text-base ">
              Is the action
              <span className="font-medium">clear and simple?</span>
            </p>
          </li>
        </ul>
        <img
          src={
            "https://framerusercontent.com/images/s32u4CYK3Drkt6Vmghsek6SN4w.png"
          }
          alt="..."
          className="w-full mt-10"
        />
        {/* ---- */}
        <p className="font-medium text-[23px] py-[10px]">🧪 Test Method</p>
        <p className="font-medium text-[17px] mt-5 ">1. Background Check</p>
        <ul className="list-disc">
          <li>
            <p className="font-normal text-base ">
              Assess user familiarity with similar platforms to contextualize
              results.
            </p>
          </li>
        </ul>
        <p className="font-medium text-[17px] mt-5 ">
          2. Prototype Walkthrough
        </p>
        <ul className="list-disc">
          <li>
            <p className="font-normal text-base ">
              Using this prototype:{" "}
              <span className="text-SecondaryText">Figma Prototype</span>
            </p>
          </li>
        </ul>
        <p className="font-medium text-[17px] mt-5 ">3. Task-Based Testing</p>
        <p className="font-normal text-base mt-3 ">
          Participants will perform the following tasks:
        </p>
        <ul className="list-disc">
          <li>
            <p className="font-normal text-base ">Upload a batch of videos</p>
          </li>
          <li>
            <p className="font-normal text-base ">
              Create a new series and link uploaded videos
            </p>
          </li>
          <li>
            <p className="font-normal text-base ">
              Assign or extract custom thumbnails
            </p>
          </li>
          <li>
            <p className="font-normal text-base ">
              Reorder episodes within a series
            </p>
          </li>
          <li>
            <p className="font-normal text-base ">
              Leave a comment or feedback on a video
            </p>
          </li>
        </ul>
        <img
          src={
            "https://framerusercontent.com/images/NvNNeSurJQXTu0gvnR955M0BLtA.png"
          }
          alt="..."
          className="w-full mt-10"
        />
        <p className="font-medium text-[17px] mt-5 ">4. Think-Aloud Protocol</p>
        <p className="font-normal text-base mt-3 ">
          Encourage participants to verbalize thoughts and decisions during each
          task.
        </p>
        <p className="font-medium text-[17px] mt-5 ">
          5. Short Interview After Tasks
        </p>
        <p className="font-normal text-base mt-3 ">
          (~5 minutes per participant)
        </p>
        <ul className="list-disc">
          <li>
            <p className="font-normal text-base ">
              Capture immediate reactions
            </p>
          </li>
          <li>
            <p className="font-normal text-base ">
              Identify frustrations or gaps in expectations
            </p>
          </li>
        </ul>
        {/* -- */}
        <p className="font-medium text-[23px] py-[10px] mt-5">
          ✅ After the Test
        </p>
        <p className="font-medium text-[17px] mt-5 ">1. Synthesize Feedback</p>
        <ul className="list-disc">
          <li>
            <p className="font-normal text-base ">
              Identify behavioral patterns and recurring usability issues
            </p>
          </li>
        </ul>
        <p className="font-medium text-[17px] mt-5 ">2. Prioritize Issues</p>
        <ul className="list-disc">
          <li>
            <p className="font-normal text-base ">
              Focus on flow breakers and discoverability problems first
            </p>
          </li>
        </ul>
        <p className="font-medium text-[17px] mt-5 ">
          3. Implement Design Updates
        </p>
        <ul className="list-disc">
          <li>
            <p className="font-normal text-base ">
              Adjust based on the highest-priority user needs
            </p>
          </li>
        </ul>
        <p className="font-medium text-[17px] mt-5 ">
          4. Quick Validation Round
        </p>
        <ul className="list-disc">
          <li>
            <p className="font-normal text-base ">
              Re-test updates with 2–3 users to confirm improvements
            </p>
          </li>
        </ul>
      </div>
      <div>
        <div className="mb-[80px]">
          <p className="font-medium text-[23px] py-[10px]">Final Product</p>
          <p className="font-medium text-[17px] ">Editor's Main Screens</p>
          <ul className="list-disc font-normal text-base">
            <li>
              <p>Homepage</p>
              <img
                src={
                  "https://framerusercontent.com/images/fGkcyDdKsPCW647Izg4R8tXWYo.gif"
                }
                alt="..."
                className="w-full mt-10"
              />
            </li>
            <li className="mt-10">
              <p>Video Library</p>
              <Image
                src={"/images/n9.png"}
                alt="..."
                height={1000}
                width={1000}
                className="w-full mt-10"
              />
            </li>
            <li className="mt-10">
              <p>Movies</p>
              <Image
                src={"/images/n10.png"}
                alt="..."
                height={1000}
                width={1000}
                className="w-full mt-10"
              />
            </li>
            <li className="mt-10">
              <p>TV Seires</p>
              <Image
                src={"/images/n11.png"}
                alt="..."
                height={1000}
                width={1000}
                className="w-full mt-10"
              />
            </li>

            <li className="mt-10">
              <p>Uploading Video</p>
              <img
                src={
                  "https://framerusercontent.com/images/GyHaT0klIZqlJr6skC0MyEPeQo.gif"
                }
                alt="..."
                className="w-full mt-10"
              />
            </li>
          </ul>
          <ul className="list-disc mt-10">
            <p className="font-medium text-[17px] ">Linking Video</p>
            <li className="">
              <p>Single</p>
              <img
                src={
                  "https://framerusercontent.com/images/a0qtWrCjuwJ8HvUV5X8emk7P1BI.gif"
                }
                alt="..."
                className="w-full mt-10"
              />
            </li>
            <li className="mt-10">
              <p>Multiple</p>
              <img
                src={
                  "https://framerusercontent.com/images/OomGEf5LiRS3THuHUcGMFZubZw.gif"
                }
                alt="..."
                className="w-full mt-10"
              />
            </li>
          </ul>
          <div className="mt-10">
            <p className="font-medium text-[17px] ">Creating Movie</p>
            <img
              src={
                "https://framerusercontent.com/images/S3YJzp5VQ1C3gOcqiaysmylpko.gif"
              }
              alt="..."
              className="w-full mt-10"
            />
          </div>
          <div className="mt-10">
            <p className="font-medium text-[17px] ">Creating TV Series</p>
            <img
              src={
                "https://framerusercontent.com/images/7Ph34BWqCfIFeqzHd8UR85ynuWs.gif"
              }
              alt="..."
              className="w-full mt-10"
            />
          </div>
          <div className="mt-10">
            <p className="font-medium text-[17px] ">Detail Pages</p>
            <Image
              src={"/images/n17.png"}
              alt="..."
              height={1000}
              width={1000}
              className="w-full mt-10"
            />
          </div>
          <div className="mt-10">
            <p className="font-medium text-[17px] ">Publisher's Flow </p>
            <img
              src={
                "https://framerusercontent.com/images/BqPks9jS8bpNVTgMEysi6APjKk.gif"
              }
              alt="..."
              className="w-full mt-10"
            />
          </div>

          {/*  */}
        </div>
      </div>
      <div className="mt-[80px]">
        <iframe
          width="100%"
          height="600"
          src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/NQgA2weqI3UcoEZ1BEHlmT/Narra-Product-Design?node-id=2021-701&p=f&t=5PTrW9w6RzzKuWRm-1&scaling=scale-down&content-scaling=fixed&page-id=6%3A3479&starting-point-node-id=2021%3A701"
        ></iframe>
      </div>
    </div>
  );
};

export default page;
