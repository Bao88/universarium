<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';


const count = ref(0)
const router = useRouter()

const goToDashboard = () => {
    router.push("/dashboard")
}
</script>

<template>
    <div>
        <q-layout>
            <q-page-container>
                <q-page>
                    <i18n-t keypath="hi">
                        <template #test>
                            testing
                        </template>
                    </i18n-t>
                    <q-btn class="glossy" rounded color="deep-orange" label="Login" @click="goToDashboard" />

                </q-page>
            </q-page-container>
        </q-layout>
    </div>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
