import { Injectable } from '@angular/core';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import { UrlService } from '../core/Services/url.service';
import { getUser, getUserFailure, getUserSuccess } from './action';
import { map, catchError } from 'rxjs';


export interface userStateModel {
    user: any;
}

@State<userStateModel>({
    name: 'user',
    defaults: {
        user: []
    }
})

@Injectable()
export class userState {
    constructor(private apiService: UrlService) { }

    @Selector()
    static getUserDetails(state: userStateModel) {
        return state.user
    }

    @Action(getUser)
    getUser(
        { dispatch }: StateContext<userStateModel>,
        { }: getUser
    ) {
        
        return this.apiService.getData().pipe(
            map(
                (response: any) => {
                    
                    if (response && response.length > 0) {
                        dispatch(new getUserSuccess(response));
                    }
                }),
            catchError((error) => dispatch(new getUserFailure(error)))
        );
    }

    @Action(getUserSuccess)
    getUserSuccess(
        { getState, setState }: StateContext<userStateModel>,
        { payload }: getUserSuccess
    ) {

        const state = getState();

        setState({
            ...state,
            user: [...payload],
        });
    }

    @Action(getUserFailure)
    getUserFailure(
        { dispatch }: StateContext<userStateModel>,
        { payload }: getUserFailure
    ) {

    }
}