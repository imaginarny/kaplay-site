import { component$ } from "@builder.io/qwik";
import { assets } from "@kaplayjs/crew";

export interface CrewItemProps {
    crewItem: keyof typeof assets;
}

const genderWord = [
    ["He", "Him", "His"],
    ["She", "Her", "Her"],
    ["They", "Them", "Their"],
];

export const CrewItem = component$<CrewItemProps>((props) => {
    const crewItem = assets[props.crewItem];

    return (
        <div class="flex h-full flex-col items-center justify-center">
            <div class="hidden lg:flex items-center md:min-h-20 py-2">
                <a class="btn btn-primary btn-sm" href="/crew">
                    Back
                </a>
            </div>
            <div class="flex h-full flex-col gap-y-3 bg-base-200 p-6 lg:p-2 text-xl lg:max-h-[60%] lg:flex-row rounded-box lg:rounded-box border border-base-content/15">
                <div class="lg:hidden mb-4">
                    <a class="btn btn-primary btn-sm" href="/crew">
                        Back
                    </a>
                </div>
                <div class="flex flex-1 flex-col gap-3 lg:p-6">
                    <div
                        class="tooltip flex justify-around rounded-xl border border-primary"
                        data-tip={crewItem.secret}
                    >
                        <img
                            src={crewItem.outlined}
                            alt={crewItem.name}
                            class="w-32 object-scale-down p-4"
                        />
                        <img
                            src={crewItem.sprite}
                            alt={crewItem.name}
                            class="w-32 object-scale-down p-4"
                        />
                    </div>

                    <div>
                        <h2 class="text-2xl font-bold text-white">
                            {crewItem.name}
                            <span class="badge badge-outline mx-2 text-base-content">
                                {crewItem.type}
                            </span>
                        </h2>
                        <p class="text-lg">by {crewItem.author}</p>

                        {crewItem.crewmeta && (
                            <>
                                <ul class="mt-5 lg:mt-7">
                                    <li class="flex items-center gap-2">
                                        <img
                                            src={assets.cake.outlined}
                                            alt="Age icon"
                                            class="h-5 w-5"
                                        />
                                        <span class="font-bold">Age:</span>{" "}
                                        {crewItem.crewmeta?.age}
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <img
                                            src={assets.weight.outlined}
                                            alt="Weight icon"
                                            class="h-5 w-5"
                                        />
                                        <span class="font-bold">Weight:</span>
                                        {" "}
                                        {crewItem.crewmeta?.weight}kg
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <img
                                            src={assets.rule.outlined}
                                            alt="Height icon"
                                            class="h-5 w-5"
                                        />
                                        <span class="font-bold">Height:</span>
                                        {" "}
                                        {crewItem.crewmeta?.height}m
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <img
                                            src={assets.stranger.outlined}
                                            alt="Species icon"
                                            class="h-5 w-5"
                                        />
                                        <span class="font-bold">Species:</span>
                                        {" "}
                                        {crewItem.crewmeta?.species}
                                    </li>
                                </ul>
                            </>
                        )}
                    </div>
                </div>
                <div class="divider divider-horizontal m-0"></div>
                <div class="flex flex-1 flex-col gap-4 lg:p-6">
                    <p class="max-w-[40ch] text-balance mb-6">
                        {crewItem.description}{"  "}{crewItem.crewmeta && (
                            <>
                                <span>
                                    {crewItem.name} hobbies includes{" "}
                                    {crewItem.crewmeta.hobbies
                                        .slice(0, -1)
                                        .join(", ")}{" "}
                                    {crewItem.crewmeta.hobbies.length > 1
                                        && "and"}{" "}
                                    {crewItem.crewmeta.hobbies.slice(-1)}.
                                </span>
                                <br />
                                <br />
                                <span>
                                    {genderWord[crewItem.crewmeta.gender][2]}
                                    {" "}
                                    favorite food is{" "}
                                    {crewItem.crewmeta.favoriteFood}, and{" "}
                                    {genderWord[
                                        crewItem.crewmeta.gender
                                    ][0].toLowerCase()}{"  "}loves the color
                                    {" "}
                                    {crewItem.crewmeta.favoriteColor}.
                                </span>
                            </>
                        )}
                    </p>
                    <btn
                        class="btn btn-outline btn-primary w-full mt-auto"
                        onClick$={() => {
                            const a = document.createElement("a");
                            a.href = crewItem.sprite!;
                            a.download = `${props.crewItem}.png`;
                            a.click();
                        }}
                    >
                        Download Sprite
                    </btn>
                    <btn
                        class="btn btn-outline btn-accent w-full"
                        onClick$={() => {
                            const a = document.createElement("a");
                            a.href = crewItem.outlined!;
                            a.download = `${props.crewItem}-o.png`;
                            a.click();
                        }}
                    >
                        Download Outlined ver.
                    </btn>
                </div>
            </div>
        </div>
    );
});
