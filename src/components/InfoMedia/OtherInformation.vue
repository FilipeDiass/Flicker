<template>
  <div
    class="my-2.5 grid h-fit w-full gap-2.5 px-2.5 text-white min-[240px]:grid-cols-2 md:my-5 xl:p-0"
  >
    <div>
      <h2 class="font-primary text-lg capitalize md:text-xl">language</h2>
      <p class="font-secondary capitalize md:text-lg">
        {{ language ? language.english_name : spoken_languages[0].english_name }}
      </p>
    </div>
    <div>
      <h2 class="font-primary text-lg capitalize md:text-xl">rating</h2>
      <p class="font-secondary capitalize md:text-lg">
        {{ vote_average }}
      </p>
    </div>
    <div>
      <h2 class="font-primary text-lg capitalize md:text-xl">budget</h2>
      <p class="font-secondary capitalize md:text-lg">
        {{ convertedBudget }}
      </p>
    </div>
    <div>
      <h2 class="font-primary text-lg capitalize md:text-xl">box office</h2>
      <p class="font-secondary capitalize md:text-lg">
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
