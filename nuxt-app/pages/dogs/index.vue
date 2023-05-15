<template>
    <h1>All about dogs</h1>

    <ul>
        <li v-for="dog in breeds">
            <NuxtLink :to="`/dogs/${dog.id}`">
                {{ dog.attributes.name }}
            </NuxtLink>
        </li>
    </ul>
</template>

<script setup>
const dogsAPI = `https://dogapi.dog/api/v2/breeds`;

const { data: result } = useFetch(dogsAPI);

const breeds = computed(() => {
    if (result.value) return result.value.data;

    return [];
});
</script>
