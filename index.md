---
layout: main_layout.njk
title: ayla
---
# hi!!! I'm ayla!!!
## and this is my website!!

#### super cool facts about me!
  * i'm 19
  * my pronoun is she
  * i'm not in education
  * i'm not in employement
  * i'm not in training
  * i'm brazilian
  * specifically from sc
  * specifically from são josé
  * specifically from redacted

i actually don't know what else to add to this list but like i had a lot of fun seeing what like claude and gemini had to say about the list. like i asked them to add the rest of it and they were just making shit up. a lot of it was accurate tho

#### social media:
  * bluesky (awesome self-hosted pds): [aylac.top](https://bsky.app/profile/aylac.top)
  * bluesky (bsky pds): [aylac.codeberg.page](https://bsky.app/profile/aylac.codeberg.page)
  * mastodon: <a rel="me" href="https://wetdry.world/@ayla">ayla@wetdry.world</a>
  * twitter: [aylaisnice](https://twitter.com/aylaisnice)

#### git:
  * personal git: [ayla](https://git.aylac.top/ayla)
  * codeberg: [aylac](https://codeberg.org/aylac)
  * tangled: [aylac.top](https://tangled.sh/@aylac.top)
  * github: [ayla6](https://github.com/ayla6)

#### chat apps:
  * signal: <span class="user select-all">ayla.55</span>
  * matrix: <span class="user select-all">@ayla06:matrix.org</span>
  * discord: <span class="user select-all">ayla.55</span>

#### if for some bizarre reason you want to contact me via email:
  * mail: <a class="user select-all" id="skibidi">Y29udGFjdEBheWxhYy50b3A=</a>
  <script>
    const skibidi = document.getElementById('skibidi')
    skibidi.textContent = atob(skibidi.textContent);
    skibidi.href = 'mailto:' + skibidi.textContent;
  </script>

#### some keys!!:
  * ssh: <span class="user mono select-all">ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAILRhN5RncjPlzdo43/DXIcnsgvX0C9xA14r4DPJ2mRbN</span>
  * pgp: <a class="user mono" href="/key.txt">here</a>

<h4 id="donate">if you're a fan of throwing money away, you can do that with me!</h4>

  * ko-fi: [aylac](https://ko-fi.com/aylac)
  * monero: <span class="user mono select-all">86a721NVhwhfcwLD15dXTzLTyZsYiUUiVYCNfnVhV4V3A1PG7Ri1Hzadx7iZiPxsCVScFkP96xSQ3KHuMepYJGeSJe72vmT</span>
  * nano: <span class="user mono select-all">nano_35iy3z98nrath7hctuuozhynzitfcjc5w8hbt4qdy1b9njzfjxo55ngndgw5</span>
  * ethereum: <span class="user mono select-all">0x8B4e95D8D2bd38d35A303CEAc5812bDa6E361A34</span>
  * bitcoin: <span class="user mono select-all">bc1qtlxyuk3qw58pwy6996c34u4lhnkjhcslhc69qm</span>
  * solana: <span class="user mono select-all">45jKZ3daNvbcYts75nZ39SBrpdZu664etQAk1dybouZM</span>
  * litecoin: <span class="user mono select-all">ltc1q79mpe0anjp45lvzmflrhzj7rz95tsm3m0jp3g2</span>

<br/>
<br/>
<br/>

send me a message

<form id="ntfy-form">
  <textarea name="message" placeholder="kys (kiss yourself)"></textarea>
  <button type="submit">Send</button>
</form>
<script>
  document.getElementById('ntfy-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const messageInput = event.target.elements.message;
    fetch('https://ntfy.aylac.top/message-to-ayla', {
      method: 'POST',
      body: messageInput.value
    });
    messageInput.value = '';
  });
</script>
