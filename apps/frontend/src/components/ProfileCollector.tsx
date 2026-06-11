import { useState } from "react";
import { Button } from "./ui/button";

export function ProfileCollector() {
    const [profileData, setProfileData] = useState({
        linkedinProfile: "",
        githubProfile: "",
        file: null as File | null,
    });

    function startProfileCollector() {
        if (!profileData.linkedinProfile && !profileData.githubProfile && !profileData.file) {
            console.log("fill data first")
        } else {
            console.log(profileData);
        }
    }

    return (
        <div>
            <div className="flex flex-col gap-3">
                <input
                    type="text"
                    name="linkedin-profile-url"
                    id="linkedin-profile-url"
                    placeholder="Linkedin Profile URL"
                    className="border py-1 px-2 rounded-md"
                    onChange={(e) =>
                        setProfileData({
                            ...profileData,
                            linkedinProfile: e.target.value,
                        })
                    }
                />

                <input
                    type="text"
                    name="github-profile-url"
                    id="github-profile-url"
                    placeholder="Github Profile URL"
                    className="border py-1 px-2 rounded-md"
                    onChange={(e) =>
                        setProfileData({
                            ...profileData,
                            githubProfile: e.target.value,
                        })
                    }
                />

                <input
                    type="file"
                    name="resume"
                    id="resume"
                    className="border py-1 px-2 rounded-md"
                    onChange={(e) =>
                        setProfileData({
                            ...profileData,
                            file: e.target.files?.[0] ?? null,
                        })
                    }
                />
            </div>

            <Button
                className="mt-6"
                type="button"
                onClick={startProfileCollector}
            >
                Submit
            </Button>
        </div>
    );
}