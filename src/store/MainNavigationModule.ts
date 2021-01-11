import {
  Module,
  Action,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';
import store from './index';

@Module({ name: 'MainNavigationModule', dynamic: true, store })
export default class MainNavigationModule extends VuexModule {
  isOpen = false

  get getNavigationState(): boolean {
    return this.isOpen;
  }

  @Action
  updateNavigationState(navState: boolean): void {
    this.context.commit('SET_NAVIGATION_STATE', navState);
  }

  @Mutation
  SET_NAVIGATION_STATE(navState: boolean): void {
    this.isOpen = navState;
  }
}
