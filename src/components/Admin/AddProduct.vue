<template>
    <div id="addproductform">
    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="form.title"
        label="Product name *"
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type product name']"
      />

      <q-input
        filled
        type="number"
        v-model="form.price"
        label="Product Price *"
        lazy-rules
      />

      <q-file 
      outlined v-model="file" 
      label="Upload Image of Product"
      @update:modelValue="fileupload()" 
       />
      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
    </div>
</template>

<script setup>
    import { ref, reactive } from 'vue';
    import { getStorage, ref as firebaseref, uploadBytesResumable, getDownloadURL } from "../../firebase.js";
    const file = ref(null);
    
    const form = reactive({
        title:'',
        price:0,
        imageUrl:''
    })

    const fileupload = ()=>{
        console.log("file selected", file.value)
        
            const storage = getStorage();

            // Create the file metadata
            /** @type {any} */
            const metadata = {
            contentType: 'image/jpeg'
            };

            // Upload file and metadata to the object 'images/mountains.jpg'
            const storageRef = firebaseref(storage, 'Products/' + file.value.name);
            const uploadTask = uploadBytesResumable(storageRef, file.value);

            // Listen for state changes, errors, and completion of the upload.
            uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
                }
            }, 
            (error) => {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;
                case 'storage/canceled':
                    // User canceled the upload
                    break;

                // ...

                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
                }
            }, 
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                form.imageUrl = downloadURL;
                });
            }
            );

    }

    import { addDoc, db, collection } from "../../firebase.js"; 
    const onSubmit = async()=>{
        console.log(form)

                // Add a second document with a generated ID.
       

        try {
        const docRef = await addDoc(collection(db, "vuestore"), form);

        console.log("Document written with ID: ", docRef.id);
        } catch (e) {
        console.error("Error adding document: ", e);
        }


    }
</script>

<style scoped>
    #addproductform{
        width: 50%;
        margin:auto
    }
</style>