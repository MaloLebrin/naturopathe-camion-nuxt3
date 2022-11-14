import type { User } from '@prisma/client'
import { SHA256 } from 'crypto-js'
import encBase64 from 'crypto-js/enc-base64'

export default function useUser() {


  /**
     * create hash password
     * @param salt string
     * @param password string recieved by front
     * @returns hash saved in DB
     */
  const generateHash = (salt: string, password: string) => {
    const hash = SHA256(password + salt).toString(encBase64)
    return hash
  }

  /**
   * @param entity UserEntity
   * @returns entity filtered without any confidential fields
   */
  const userResponse = (entity: User) => {
    const entityReturned = {} as Record<string, any>
    for (const [key, value] of Object.entries(entity)) {
      if (key !== 'password' && key !== 'salt') {
        entityReturned[key] = value
      }
    }
    return entityReturned
  }

  function isValidPassword(user: User, password: string): boolean {
    const hash = generateHash(user.salt, password)
    return hash === user.password
  }

  return {
    isValidPassword,
    generateHash,
    userResponse,
  }
}
