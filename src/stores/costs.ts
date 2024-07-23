import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { ParticipantType } from '@/stores/model/participant-type.model'

export const useCostsStore = defineStore('costs', {
  state(): {
    counts: Record<string, number>,
    participantTypes: ParticipantType[],
    minutes: number,
    runningSeconds: number,
    hoursPerWeek: number
  } {
    const counts = ref(new Proxy({}, {
      get: (existingCounts: Record<string, number>, countKey: string) => countKey in existingCounts ? existingCounts[countKey] : 0
    }))
    return {
      hoursPerWeek: 37.5,
      minutes: 60,
      runningSeconds: 0,
      counts: counts.value,
      // salary is based on kununu.de
      participantTypes: [
        {
          key: 'DEV',
          name: 'Developer',
          yearlySalary: 65_300
        },
        {
          key: 'PL',
          name: 'PL',
          yearlySalary: 69_400
        },
        {
          key: 'PM',
          name: 'Productmanager',
          yearlySalary: 71_200
        },
        {
          key: 'UX',
          name: 'UX',
          yearlySalary: 55_800
        },
        {
          key: 'BA',
          name: 'Business Analyst',
          yearlySalary: 62_100
        },
        {
          key: 'A',
          name: 'Azubi',
          yearlySalary: 18_000
        }
      ]

    }
  },

  actions: {
    totalCount(): number {
      return Object.values(this.counts).reduce((acc, count) => acc + count, 0)
    },
    incrementRunningSeconds(): void {
      this.runningSeconds++
    },
    resetRunningSeconds(): void {
      this.runningSeconds = 0
    },
    getParticipantTypeByKey(key: string): ParticipantType | undefined {
      return this.participantTypes.find(participantType => participantType.key === key)
    }
  }
})
