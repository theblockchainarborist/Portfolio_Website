<template>
    <div class="download-btn">
        <button id="btn-download" @click="downloadPDF">Download PDF</button>
    </div>
</template>

<script>
export default {
    methods: {
    async downloadPDF() {
      // create a blob of the PDF file
      const response = await fetch('/resume/Connor_Ray_Resume.pdf');
      const blob = await response.blob();

      // create a URL that can be used to download the file
      const url = URL.createObjectURL(blob);

      // create an anchor element
      const a = document.createElement('a');

      // set the href and download attributes
      a.href = url;
      a.download = 'connor-ray-resume.pdf';

      // trigger a click event on the anchor element
      a.click();

      // revoke the object URL to free up memory
      URL.revokeObjectURL(url);
    }
  }

}
</script>

<style>

.download-btn {
    display: flex;
    width: 60%;
    justify-content: left;
    margin-top: 1%;
}

#btn-download {
    font-size: 1.2vw;
    font-family: 'Alegreya', serif;
    font-weight: 550;
    border-radius: 5px;
}

#btn-download:hover {
    cursor: pointer;
}


/* Mobile CSS */
@media (max-width: 1400px) {
    #btn-download {
        font-size: 17px;
        font-family: 'Alegreya', serif;
        font-weight: 550;
        border-radius: 5px;
    }
}

</style>