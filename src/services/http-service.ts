import apiClient from './api-client';

interface Entity {
    id: number;
}

class HttpService {
    endpoint: string;
    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }
    getAll<T>() {
        const controller = new AbortController();
        const request = apiClient
      .get<T[]>(this.endpoint, {
        signal: controller.signal,
      });
      return {request, cancel: () => controller.abort()}
    }

    delete(id: number) {
        return apiClient.delete(`${this.endpoint}/${id}`)
    }

    add<T>(entity: T) {
        const controller = new AbortController();
        const request = apiClient.post(`${this.endpoint}`, entity);
        return {request, cancel: () => controller.abort()};
    }

    update<T extends Entity>(entity: T) {
        console.log(entity.id);
        return apiClient.patch(`${this.endpoint}/${entity.id}`, entity)
    }
}

const create = (endpoint: string) => new HttpService(endpoint);
export default create;