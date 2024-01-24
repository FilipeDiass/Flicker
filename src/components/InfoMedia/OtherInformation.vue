<template>
  <div class="my-2.5 grid h-fit w-full grid-cols-2 gap-2.5 px-2.5 text-white">
    <div>
      <h2 class="font-primary text-lg capitalize">language</h2>
      <p class="font-secondary capitalize">
        {{ language ? language.english_name : spoken_languages[0].english_name }}
      </p>
    </div>
    <div>
      <h2 class="font-primary text-lg capitalize">rating</h2>
      <p class="font-secondary capitalize">
        {{ vote_average }}
      </p>
    </div>
    <div>
      <h2 class="font-primary text-lg capitalize">budget</h2>
      <p class="font-secondary capitalize">
        {{ convertedBudget }}
      </p>
    </div>
    <div>
      <h2 class="font-primary text-lg capitalize">box office</h2>
      <p class="font-secondary capitalize">
        {{ convertedRevenue }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  infoMedia: {
    type: Object,
    default: () => ({})
  }
})

const { spoken_languages, vote_average, budget, revenue } = props.infoMedia

const language = spoken_languages.find((el) => el.english_name === 'English')

const convertedBudget = budget
  ? budget.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    })
  : '-'
const convertedRevenue = revenue
  ? revenue.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    })
  : '-'
</script>

<style scoped></style>
