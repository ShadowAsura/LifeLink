<script>
    //imports
    import { onMount } from 'svelte';
    import QRLib from "qrcode";
    import QRCode from '$lib/components/QRCode.svelte';

    //exports
    export let data;

    //get user info
    const user_info = data.user_info;
    const contacts = user_info.emergency_contacts;
    const conditions = user_info.conditions;
    const allergies = user_info.allergies;
    const meds = user_info.current_meds;

    const DOMAIN_NAME = "https://lifelink-eta.vercel.app";

    onMount(() => {
        let card_img = new Image();
        card_img.src = "/card.png";
    
        async function draw_card_canvas() {
            let context = document.getElementById("card-canvas").getContext("2d");
            context.drawImage(card_img, 0, 0, 769, 905)
            let data_url = await QRLib.toDataURL(`${DOMAIN_NAME}/profile/${data.uuid}`);
            let qr_img = new Image();
            qr_img.src = data_url;
            qr_img.onload = () => {
                context.drawImage(qr_img, 44, 121, 190, 190);
            }
            //draw text
            context.font = "50px Arial";
            context.fillText(user_info.name, 251, 160);
            context.font = "21px Arial";
            context.fillText(user_info.insurance, 461, 195);
            context.fillText(user_info.age, 307, 230);
            context.fillText(user_info.sex, 305, 266);
            context.fillText(user_info.bloodtype, 385, 304);
            context.font = "24px Arial";
            if (user_info.emergency_contacts[0]) {
                context.fillText("•  "+user_info.emergency_contacts[0].name+": "+user_info.emergency_contacts[0].phone, 95, 390);
            }
            if (user_info.emergency_contacts[1]) {
                context.fillText("•  "+user_info.emergency_contacts[1].name+": "+user_info.emergency_contacts[1].phone, 95, 420);
            }
            if (user_info.conditions[0]) {
                context.fillText("•  "+user_info.conditions[0], 80, 530);
            }
            if (user_info.conditions[1]) {
                context.fillText("•  "+user_info.conditions[1], 80, 560);
            }
            if (user_info.conditions[2]) {
                context.fillText("•  "+user_info.conditions[2], 80, 590);
            }
            console.log(user_info.allergies[0])
            if (user_info.allergies[0]) {
                if (user_info.allergies[0].name) {
                    context.fillText("•  "+user_info.allergies[0].name, 450, 530);
                }
            }
            if (user_info.allergies[1]) {
                if (user_info.allergies[1].name) {
                    context.fillText("•  "+user_info.allergies[1].name, 450, 560);
                }
            }
            context.font = "25px Arial";
            let text_width = context.measureText(user_info.notes).width;
            let notes = user_info.notes;
            if (text_width > 700) {
                notes = notes.slice(0, 60)+"...";
                text_width = context.measureText(notes).width;
            }
            context.fillText(notes, 769/2-(text_width/2), 800);
        }

        card_img.onload = draw_card_canvas;
    });
</script>

<style>
    #card {
        width: 30rem;
    }

    #hidden-card {
        position: absolute;
        display: none;
    }

    @media print {
        * {
            display: none;
        }

        #hidden-card {
            display: block;
        }
    }
</style>

<div id="hidden-card">
    <canvas id="card-canvas" width=769 height=905></canvas>
</div>

<div class="flex flex-row justify-center w-full py-20">
    <div id="card" class="flex flex-col border rounded-lg px-10 py-10 gap-3 bg-slate-50">
        
        <!-- header -->
        <div class="flex flex-row items-center flex-nowrap">
            <h1 class="text-3xl">{user_info.name}</h1>
            <div class="ml-auto">
                <QRCode uuid={data.uuid}/>
            </div>
        </div>

        <div class="flex flex-row gap-1">
            <span class="border rounded-full px-2 bg-gray-200">
                {user_info.sex}
            </span>
    
            <span class="border rounded-full px-2 bg-teal-100">
                {user_info.age} yrs old
            </span>
      
            <span class="border rounded-full px-2 bg-rose-100">
                Type {user_info.bloodtype}
            </span>

            <span class="border rounded-full px-2 bg-indigo-100">
                {user_info.weight} lbs
            </span>

            <span class="border rounded-full px-2 bg-amber-100">
                {Math.floor(user_info.height / 12)}' {user_info.height % 12}"
            </span>
        </div>

        <div>
            <!-- {healthcare} -->
        </div>


        <div class="flex flex-col gap-3">
            <div class="flex flex-col">
                <h2 class="text-xl">Emergency Contacts</h2>
                {#if contacts !== undefined}
                    <div class="flex flex-row pt-2 gap-1">
                        {#each contacts as contact}
                        <div class="border-2 p-3 rounded-lg bg-blue-200">
                            {contact.name || ""}<br/>
                            {contact.phone || ""}<br/>
                            {contact.notes || ""}
                        </div>

                        {/each}
                    </div>
                {:else}
                    <div>N/A</div>
                {/if}
            </div>
    
            <div class="flex flex-col">
                <h2 class="text-xl">Medical Conditions</h2>
                {#if conditions !== undefined}
                <div class="flex flex-row pt-2 gap-1">
                    {#each conditions as condition}
                    <div class="border-2 p-3 rounded-lg bg-red-200">
                        {condition || ""}
                    </div>
                    {/each}
                </div>
                {:else}
                    <div>N/A</div>
                {/if}
            </div>

            <div class="flex flex-col">
                <h2 class="text-xl">Current Medication</h2>
                {#if meds !== undefined}
                <div class="flex flex-row pt-2 gap-1">
                    {#each meds as med}
                    <div class="border-2 p-3 rounded-lg bg-pink-200">
                        {med || ""}
                    </div>
                    {/each}
                </div>
                {:else}
                    <div>N/A</div>
                {/if}
            </div>
            
            <div class="flex flex-col">
                <h2 class="text-xl">Allergies</h2>
                {#if allergies !== undefined}
                <div class="flex flex-row pt-2 gap-1">
                    {#each allergies as allergy}
                    <div class="border-2 p-3 rounded-lg bg-green-200">
                        {allergy.name || ""}<br/>
                        {allergy.note || ""}
                    </div>
                    {/each}
                </div>
                {:else}
                    <div>N/A</div>
                {/if}
            </div>
    
            
        </div>
    </div>


    </div>

    